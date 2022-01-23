import { Story, Meta } from '@storybook/react';
import { TransactionsProvider } from 'hooks/TransactionContext';
import TransactionsTable from '.';

export default {
  title: 'TransactionsTable',
  component: TransactionsTable
} as Meta;

export const Default: Story = () => (
  <TransactionsProvider>
    <TransactionsTable />
  </TransactionsProvider>
);
