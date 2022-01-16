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
      .c1 {
        margin-top: 6.4rem;
      }

      .c2 {
        width: 100%;
        border-spacing: 0 0.8rem;
      }

      .c3 {
        color: #969CB3;
        padding: 1.6rem 3.2rem;
        text-align: left;
        line-height: 2.4rem;
      }

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
        <main
          class="c1"
        >
          <table
            class="c2"
          >
            <thead
              class=""
            >
              <tr
                class=""
              >
                <th
                  class="c3"
                >
                  Título
                </th>
                <th
                  class="c3"
                >
                  Valor
                </th>
                <th
                  class="c3"
                >
                  Categoria
                </th>
                <th
                  class="c3"
                >
                  Data
                </th>
              </tr>
            </thead>
            <tbody
              class=""
            />
          </table>
        </main>
      </main>
    `);
  });
});
