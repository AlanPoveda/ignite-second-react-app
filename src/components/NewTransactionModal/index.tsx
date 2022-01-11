import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionContext";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeButton from "../../assets/close.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
    const { createTransaction } = useContext(TransactionContext);
    const [ title, setTitle ] = useState("") 
    const [ amount, setAmount ] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("income");

    async function handleCrateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount, 
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('income')

        onRequestClose()
        
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeButton} alt="Close Modal" />
            </button>
            <Container onSubmit={handleCrateNewTransaction}>
                <h2>Register transaction</h2>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    placeholder="Value"
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === "income"}
                        activeColor="green"
                        onClick={() => {
                            setType("income");
                        }}
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={type === "outcome"}
                        activeColor="red"
                        onClick={() => {
                            setType("outcome");
                        }}
                    >
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit">Insert</button>
            </Container>
        </Modal>
    );
};
