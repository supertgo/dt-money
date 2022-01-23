import { Story, Meta } from '@storybook/react';
import { TransactionsProvider } from 'hooks/TransactionContext';
import Summary from '.';

export default {
  title: 'Summary',
  component: Summary
} as Meta;

export const Default: Story = () => (
  <TransactionsProvider>
    <Summary />
  </TransactionsProvider>
);
