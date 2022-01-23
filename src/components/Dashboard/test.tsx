import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { TransactionsProvider } from 'hooks/TransactionContext';

import Dashboard from '.';

jest.mock('components/Summary', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Summary" />;
  }
}));

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <TransactionsProvider>
        <Dashboard />
        );
      </TransactionsProvider>
    );

    expect(screen.getByTestId('Mock Summary')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        display: none;
      }

      .c5 {
        display: none;
      }

      .c11 .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
      }

      .c11 .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }

      .c11 .slick-list:focus {
        outline: none;
      }

      .c11 .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
      }

      .c11 .slick-slider .slick-track,
      .c11 .slick-slider .slick-list {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }

      .c11 .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
      }

      .c11 .slick-track:before,
      .c11 .slick-track:after {
        display: table;
        content: '';
      }

      .c11 .slick-track:after {
        clear: both;
      }

      .c11 .slick-loading .slick-track {
        visibility: hidden;
      }

      .c11 .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
      }

      .c11 [dir='rtl'] .slick-slide {
        float: right;
      }

      .c11 .slick-slide img {
        display: block;
      }

      .c11 .slick-slide.slick-loading img {
        display: none;
      }

      .c11 .slick-slide.dragging img {
        pointer-events: none;
      }

      .c11 .slick-initialized .slick-slide {
        display: block;
      }

      .c11 .slick-loading .slick-slide {
        visibility: hidden;
      }

      .c11 .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
      }

      .c11 .slick-arrow.slick-hidden {
        display: none;
      }

      .c10 .slick-slide {
        margin-bottom: 1rem;
      }

      .c2 {
        margin-top: 6.4rem;
      }

      .c3 {
        width: 100%;
        border-spacing: 0 0.8rem;
      }

      .c4 {
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

      .c6 {
        margin-top: 3.2rem;
      }

      .c7 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c8 {
        color: #363F5F;
        font-size: 2.0rem;
        margin-bottom: 1.6rem;
      }

      .c9 {
        color: #969CB3;
      }

      @media (min-width:768px) {
        .c1 {
          display: block;
        }
      }

      @media (max-width:768px) {
        .c5 {
          display: block;
        }
      }

      <main
        class="c0"
      >
        <div
          data-testid="Mock Summary"
        />
        <div
          class="c1"
        >
          <main
            class="c2"
          >
            <table
              class="c3"
            >
              <thead
                class=""
              >
                <tr
                  class=""
                >
                  <th
                    class="c4"
                  >
                    Título
                  </th>
                  <th
                    class="c4"
                  >
                    Valor
                  </th>
                  <th
                    class="c4"
                  >
                    Categoria
                  </th>
                  <th
                    class="c4"
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
        </div>
        <div
          class="c5"
        >
          <div
            class="c6"
          >
            <div
              class="c7"
            >
              <p
                class="c8"
              >
                Listagem
              </p>
              <p
                class="c9"
              >
                0 itens
              </p>
            </div>
            <main
              class="c10"
            >
              <main
                class="c11"
              >
                <div
                  class="slick-slider slick-vertical slick-initialized"
                >
                  
                  <div
                    class="slick-list"
                  >
                    <div
                      class="slick-track"
                      style="opacity: 1; transform: translate3d(0px, 0px, 0px);"
                    />
                  </div>
                  
                  
                </div>
              </main>
            </main>
          </div>
        </div>
      </main>
    `);
  });
});
