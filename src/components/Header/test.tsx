import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole('img', { name: /dt-money/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Nova transação/i })
    ).toBeInTheDocument();
  });
});
