import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

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
            <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleClosedNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}
