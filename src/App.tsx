import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from 'react'

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleClosedNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard />
            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleClosedNewTransactionModal}
            >
                <h2>Register transaction</h2>
            </Modal>
            <GlobalStyle />
        </>
    );
}
