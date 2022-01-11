import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionContext";

import { Container } from "./styles";

export const Summary = () => {
    const { transactions } = useContext(TransactionContext);

    const sumary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == "income") {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraw += transaction.amount;
                acc.total -= transaction.amount;
            }

            return acc;
        },
        {
            deposits: 0,
            withdraw: 0,
            total: 0,
        },
    );

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(sumary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>
                    -{" "}
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(sumary.withdraw)}
                </strong>
            </div>
            <div className="background-high-light">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(sumary.total)}
                </strong>
            </div>
        </Container>
    );
};
