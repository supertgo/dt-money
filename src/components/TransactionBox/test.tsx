import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TransactionBox from '.';

describe('<TransactionBox />', () => {
  it('should render the default type', () => {
    renderWithTheme(<TransactionBox amount={500} />);
    const type = screen.getByText('Entradas');

    expect(type.parentElement?.parentElement).toHaveStyle(
      'backgroundColor: #FFFFFF'
    );
    expect(type).toBeInTheDocument();
    expect(screen.getByText('R$ 500,00')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Entrada/i })).toBeInTheDocument();
  });

  it('should render the outcome type', () => {
    renderWithTheme(<TransactionBox type="outcome" amount={100} />);

    expect(screen.getByText('Saídas')).toBeInTheDocument();
    expect(screen.getByText('- R$ 100,00')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Saída/i })).toBeInTheDocument();
  });

  it('should render the total type', () => {
    renderWithTheme(<TransactionBox type="total" amount={400} />);

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('R$ 400,00')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Total/i })).toBeInTheDocument();
  });

  it('should render the green color', () => {
    renderWithTheme(<TransactionBox type="total" amount={400} color="green" />);

    const type = screen.getByText('Total');

    expect(type.parentElement?.parentElement).toHaveStyle(
      'backgroundColor: #33CC95'
    );
  });
});
