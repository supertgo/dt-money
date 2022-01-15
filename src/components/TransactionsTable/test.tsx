import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TransactionsTable from '.';

describe('<TransactionsTable />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TransactionsTable />);

    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Valor')).toBeInTheDocument();
    expect(screen.getByText('Categoria')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
  });
});
