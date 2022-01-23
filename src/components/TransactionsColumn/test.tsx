import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TransactionsColumn from '.';

describe('<TransactionsColumn />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <TransactionsColumn
        amount={1200}
        title="Desenvolvimento"
        type="deposit"
        category="Dev"
        createdAt="2021-06-12"
      />
    );

    const amount = screen.getByText('R$ 1.200,00');
    expect(amount).toBeInTheDocument();
    expect(screen.getByText('Desenvolvimento')).toBeInTheDocument();
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('11/06/2021')).toBeInTheDocument();

    expect(amount).toHaveStyle('color: #33CC95');
  });

  it('should render the red color', () => {
    renderWithTheme(
      <TransactionsColumn
        amount={1200}
        title="Desenvolvimento"
        type="withdraw"
        category="Dev"
        createdAt="2021-06-12"
      />
    );

    const amount = screen.getByText('R$ 1.200,00');

    expect(amount).toHaveStyle('color: #E62E4D');
  });
});
