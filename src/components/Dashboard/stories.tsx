import { Story, Meta } from '@storybook/react';
import Dashboard from '.';

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta;

export const Default: Story = () => (
  <div style={{ marginTop: '15rem' }}>
    <Dashboard />
  </div>
);
