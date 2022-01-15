import Dashboard from 'components/Dashboard';
import Header from 'components/Header';
import TransactionsTable from 'components/TransactionsTable';

import { createServer } from 'miragejs';

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
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
    </>
  );
}
