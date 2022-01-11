import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'

import { Container } from "./styles";

export const Summary = () => {
    const { transactions } = useContext(TransactionContext)

    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>R$2000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>- R$1000,00</strong>
            </div>
            <div className='background-high-light'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />           
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}