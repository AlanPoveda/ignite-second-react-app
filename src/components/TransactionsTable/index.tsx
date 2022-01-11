import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export const TransactionsTable = () => {
    const { transactions } = useTransactions();
    
    console.log(transactions)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createAt)
                                )}    
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};
