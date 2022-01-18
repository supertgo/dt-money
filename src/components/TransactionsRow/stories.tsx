import { Story, Meta } from '@storybook/react';
import TransactionsRow from '.';

export default {
  title: 'TransactionsRow',
  component: TransactionsRow
} as Meta;

export const Default: Story = () => (
  <TransactionsRow
    id={1}
    amount={1200}
    title="Desenvolvimento"
    type="deposit"
    category="Dev"
    createdAt="2021-06-12"
  />
);
