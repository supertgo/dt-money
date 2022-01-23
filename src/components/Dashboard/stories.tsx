import { Story, Meta } from '@storybook/react';
import { TransactionsProvider } from 'hooks/TransactionContext';
import Dashboard from '.';

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta;

export const Default: Story = () => (
  <div style={{ marginTop: '15rem' }}>
    <TransactionsProvider>
      <Dashboard />
    </TransactionsProvider>
  </div>
);
