import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import { useState } from "react";
import Modal from "react-modal";


interface HeaderProps {
    onOpenTransactionModal: () => void;
}

export const Header = ({ onOpenTransactionModal }: HeaderProps) => {
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="finances-app" />
                <button type="button" onClick={onOpenTransactionModal}>
                    New transaction
                </button>
            </Content>
            
        </Container>
    );
};
