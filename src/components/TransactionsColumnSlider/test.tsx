import 'match-media-mock';
import mock from 'components/TransactionsColumn/mock';

import TransactionsColumnSlider from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<TransactionsColumnSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <TransactionsColumnSlider items={mock} />
    );

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3);
  });
});
