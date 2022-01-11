import { createContext, useEffect, useState, ReactNode } from 'react';

import { api } from './services/api';


type TransactionInput = Pick<Transaction,  'title' | 'amount' | 'type' |'category'>;

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

interface TransactionProviderProps{
    children: ReactNode
}

interface TransactionDataContext {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionDataContext>({} as TransactionDataContext);

export function TransactionContextProvider({ children }: TransactionProviderProps){

    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get(`/transactions`).then((response) =>
            setTransaction(response.data.transactions),
        );
    }, []);


    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date()
        });

        const { transaction } = response.data;

        setTransaction([
            ...transactions,
            transaction
        ])
    }

    return(
        <TransactionContext.Provider  value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>

    );
};