import { Story, Meta } from '@storybook/react';
import TransactionsColumn from '.';

export default {
  title: 'TransactionsColumn',
  component: TransactionsColumn
} as Meta;

export const Default: Story = () => (
  <TransactionsColumn
    amount={1200}
    title="Desenvolvimento"
    type="deposit"
    category="Dev"
    createdAt="2021-06-12"
  />
);

export const Withdraw: Story = () => (
  <TransactionsColumn
    amount={1200}
    title="Desenvolvimento"
    type="withdraw"
    category="Dev"
    createdAt="2021-06-12"
  />
);
