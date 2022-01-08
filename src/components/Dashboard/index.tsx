import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { Transactions } from "../TransactionsTable";

export const Dashboard = () => {
    return(
        <>
            <Container>
                <Summary />
                <Transactions />
            </Container>
        </>
    );
}