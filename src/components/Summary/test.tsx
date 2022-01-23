import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { TransactionsProvider } from 'hooks/TransactionContext';

import Summary from '.';

jest.mock('components/TransactionBox', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock TransactionBox" />;
  }
}));

describe('<Summary />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <TransactionsProvider>
        <Summary />
      </TransactionsProvider>
    );

    expect(screen.getAllByTestId('Mock TransactionBox')).toHaveLength(6);
    expect(container).toMatchSnapshot();
  });
});
