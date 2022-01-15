import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    const mockHandleOpenNewTransactionModal = jest.fn();
    renderWithTheme(
      <Header onOpenNewTransactionModal={mockHandleOpenNewTransactionModal} />
    );

    expect(screen.getByRole('img', { name: /dt-money/i })).toBeInTheDocument();
    const headerButton = screen.getByRole('button', {
      name: /Nova transação/i
    });
    expect(headerButton).toBeInTheDocument();

    userEvent.click(headerButton);

    expect(mockHandleOpenNewTransactionModal).toBeCalled();
  });
});
