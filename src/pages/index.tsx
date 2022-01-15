import Dashboard from 'components/Dashboard';
import Header from 'components/Header';
import NewTransactionModal from 'components/NewTransactionModal';
import TransactionsTable from 'components/TransactionsTable';

import { createServer } from 'miragejs';
import { useState } from 'react';

createServer({
  routes() {
    this.get('/api/transactions', () => {
      return [
        { id: 1, name: 'Inception', year: 2010 },
        { id: 2, name: 'Interstellar', year: 2014 },
        { id: 3, name: 'Dunkirk', year: 2017 }
      ];
    });
  }
});

export default function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeOpenNewTransactionModal}
      />
      <Dashboard />
      <TransactionsTable />
    </>
  );
}
