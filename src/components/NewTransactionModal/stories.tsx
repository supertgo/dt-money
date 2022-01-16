import { Story, Meta } from '@storybook/react';
import NewTransactionModal from '.';

export default {
  title: 'NewTransactionModal',
  component: NewTransactionModal
} as Meta;

export const Default: Story = () => (
  <NewTransactionModal isOpen onRequestClose={() => ({})} />
);
