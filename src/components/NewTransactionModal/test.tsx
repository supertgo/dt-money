import { screen, waitFor } from '@testing-library/react';
import ReactModal from 'react-modal';
import { renderWithTheme } from 'utils/tests/helpers';

import NewTransactionModal from '.';

ReactModal.setAppElement(document.createElement('div'));

describe('<NewTransactionModal />', () => {
  it('should render the modal info when it is closed', () => {
    const mockOnRequestClose = jest.fn();
    const { container } = renderWithTheme(
      <NewTransactionModal isOpen={false} onRequestClose={mockOnRequestClose} />
    );

    expect(mockOnRequestClose).not.toBeCalled();
    expect(screen.queryByText('Cadastrar transação')).not.toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`<div />`);
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
