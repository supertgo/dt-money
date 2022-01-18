import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TransactionsRow from '.';

describe('<TransactionsRow />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <TransactionsRow
        id={1}
        amount={1200}
        title="Desenvolvimento"
        type="deposit"
        category="Dev"
        createdAt="2021-06-12"
      />
    );

    expect(screen.getByText('Desenvolvimento')).toBeInTheDocument();
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('11/06/2021')).toBeInTheDocument();
    expect(screen.getByText('R$ 1.200,00')).toHaveStyle('color:#33CC95');
  });

  it('should render the red color if its withdraw', () => {
    renderWithTheme(
      <TransactionsRow
        id={1}
        amount={1200}
        title="Desenvolvimento"
        type="withdraw"
        category="Dev"
        createdAt="2021-06-12"
      />
    );

    expect(screen.getByText('R$ 1.200,00')).toHaveStyle('color:#E62E4D');
  });
});
