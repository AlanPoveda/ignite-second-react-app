import { Container } from "./styles";
import { useEffect } from 'react'

const apiUrl = 'http://localhost:3000';

export const Transactions = () => {

    useEffect(() => {
        fetch(`${apiUrl}/api/transactions`)
            .then(response => response.json())
            .then(data => console.log(data))
    },[]);

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
