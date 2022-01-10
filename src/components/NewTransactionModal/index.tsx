import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeButton from "../../assets/close.svg";
import { useState } from "react";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
    const [type, setType] = useState("income");

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
            <Container>
                <h2>Register transaction</h2>
                <input placeholder="Title" />
                <input placeholder="Amount" type="number" />
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
                <input placeholder="Category" />
                <button type="submit">Insert</button>
            </Container>
        </Modal>
    );
};
