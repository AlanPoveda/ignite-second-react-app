import { Container } from "./styles";

export const Transactions = () => {
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
                    <tr>
                        <td>Website development</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Development</td>
                        <td>08/01/2022</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Home</td>
                        <td>02/01/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
};
