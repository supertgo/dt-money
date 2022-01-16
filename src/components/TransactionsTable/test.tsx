import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { TransactionsProvider } from 'hooks/TransactionContext';

import TransactionsTable from '.';

describe('<TransactionsTable />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <TransactionsProvider>
        <TransactionsTable />
      </TransactionsProvider>
    );

    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Valor')).toBeInTheDocument();
    expect(screen.getByText('Categoria')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
  });
});
