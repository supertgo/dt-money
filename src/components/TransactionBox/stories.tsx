import { Story, Meta } from '@storybook/react';
import TransactionBox, { TransactionBoxProps } from '.';

export default {
  title: 'TransactionBox',
  component: TransactionBox
} as Meta;

export const Default: Story<TransactionBoxProps> = (args) => (
  <TransactionBox {...args} amount={500} />
);

export const Outcome: Story<TransactionBoxProps> = (args) => (
  <TransactionBox {...args} amount={100} />
);

Outcome.args = {
  type: 'outcome'
};

export const Total: Story<TransactionBoxProps> = (args) => (
  <TransactionBox {...args} amount={400} />
);

Total.args = {
  type: 'total'
};
