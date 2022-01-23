import { Story, Meta } from '@storybook/react';
import TransactionBoxSlider from '.';
import TransactionBox from 'components/TransactionBox';

export default {
  title: 'TransactionBoxSlider',
  component: TransactionBoxSlider
} as Meta;

export const Default: Story = () => (
  <TransactionBoxSlider>
    <TransactionBox amount={100} />
    <TransactionBox type="outcome" amount={500} />
    <TransactionBox type="total" amount={500} color="green" />
  </TransactionBoxSlider>
);
