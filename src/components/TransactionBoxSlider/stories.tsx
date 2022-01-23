import { Story, Meta } from '@storybook/react';
import TransactionBoxSlider from '.';
import mockTransactionBox from 'components/TransactionBox/mock';

export default {
  title: 'TransactionBoxSlider',
  component: TransactionBoxSlider
} as Meta;

export const Default: Story = () => (
  <TransactionBoxSlider items={mockTransactionBox} />
);
