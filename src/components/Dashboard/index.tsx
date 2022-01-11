import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard = () => {
    return(
        <>
            <Container>
                <Summary />
                <TransactionsTable />
            </Container>
        </>
    );
}