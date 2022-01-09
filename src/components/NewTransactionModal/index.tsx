import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";
import closeButton from "../../assets/close.svg";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
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
                    <button type="button">
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="Category" />
                <button type="submit">Insert</button>
            </Container>
        </Modal>
    );
};
