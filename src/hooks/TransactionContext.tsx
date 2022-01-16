import { createContext, useState, useEffect, useContext } from 'react';
import { api } from 'services/api';

export type Transaction = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionContext = createContext<Transaction[]>([]);

export const TransactionsProvider = ({
  children
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
