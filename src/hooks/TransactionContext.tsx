import { createContext, useState, useEffect, useContext } from 'react';
import { api } from 'services/api';
import { getStorageItem, setStorageItem } from 'utils/localStorage';

const TRANSACTION_kEY = 'transactionsItems';

export type TransactionProps = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
  children: React.ReactNode;
};

type TransactionContextProps = {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export const TransactionsProvider = ({
  children
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    const data = getStorageItem(TRANSACTION_kEY);

    if (data) {
      setTransactions(data);
    }
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    saveTransactions([...transactions, transaction]);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveTransactions(transaction: any) {
    setStorageItem(TRANSACTION_kEY, transaction);
    setTransactions(transaction);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
