import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TransactionsProvider } from 'hooks/TransactionContext';
import ReactModal from 'react-modal';
import { renderWithTheme } from 'utils/tests/helpers';

import NewTransactionModal from '.';

ReactModal.setAppElement(document.createElement('div'));

describe('<NewTransactionModal />', () => {
  it('should render the modal info when it is closed', () => {
    const mockOnRequestClose = jest.fn();
    renderWithTheme(
      <NewTransactionModal isOpen={false} onRequestClose={mockOnRequestClose} />
    );

    expect(mockOnRequestClose).not.toBeCalled();
    expect(screen.queryByText('Cadastrar transação')).not.toBeInTheDocument();
  });

  it('should render the modal info and close with real data ', () => {
    const mockOnRequestClose = jest.fn();
    renderWithTheme(
      <TransactionsProvider>
        <NewTransactionModal
          isOpen={true}
          onRequestClose={mockOnRequestClose}
        />
      </TransactionsProvider>
    );

    expect(mockOnRequestClose).not.toBeCalled();
    expect(screen.queryByText('Cadastrar transação')).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

    userEvent.click(submitButton);

    const inputTitulo = screen.getByPlaceholderText('Título');
    const inputCategory = screen.getByPlaceholderText('Categoria');

    fireEvent.change(inputTitulo, { target: 'Transação' });
    fireEvent.change(inputCategory, { target: 'Categoria' });

    waitFor(() => {
      expect(mockOnRequestClose).toBeCalled();
    });
  });

  it('should render the modal info when it is open', () => {
    const mockOnRequestClose = jest.fn();
    renderWithTheme(
      <NewTransactionModal isOpen onRequestClose={mockOnRequestClose} />
    );

    waitFor(() => {
      expect(screen.queryByText('Cadastrar transação')).not.toBeInTheDocument();
    });
  });
});
