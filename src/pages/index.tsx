import Dashboard from 'components/Dashboard';
import Header from 'components/Header';
import NewTransactionModal from 'components/NewTransactionModal';

import { createServer, Model } from 'miragejs';
import { useState } from 'react';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '1',
          title: 'Freelance de Webisite',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 09:00:00')
        },
        {
          id: '2',
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: -1100,
          createdAt: new Date('2022-02-14 11:00:00')
        }
      ]
    });
  },
  routes() {
    this.get('/api/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/api/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
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
    </>
  );
}
