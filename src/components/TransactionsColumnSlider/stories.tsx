import { Story, Meta } from '@storybook/react';
import TransactionsColumnSlider from '.';

import items from 'components/TransactionsColumn/mock';

export default {
  title: 'TransactionsColumnSlider',
  component: TransactionsColumnSlider
} as Meta;

export const Default: Story = () => <TransactionsColumnSlider items={items} />;
