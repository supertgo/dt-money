import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Dashboard from '.';

jest.mock('components/Summary', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Summary" />;
  }
}));

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Dashboard />);

    expect(screen.getByTestId('Mock Summary')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 112rem;
        margin: 0 auto;
        padding: 4.0rem 1.6rem;
      }

      <main
        class="c0"
      >
        <div
          data-testid="Mock Summary"
        />
      </main>
    `);
  });
});
