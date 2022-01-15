import { Story, Meta } from '@storybook/react';
import TransactionsTable from '.';

export default {
  title: 'TransactionsTable',
  component: TransactionsTable
} as Meta;

export const Default: Story = () => <TransactionsTable />;
