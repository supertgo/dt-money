import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helpers';

import items from 'components/TransactionBox/mock';

import TransactionBoxSlider from '.';

describe('<TransactionBoxSlider />', () => {
  it('should render be three items', () => {
    const { container } = renderWithTheme(
      <TransactionBoxSlider items={items} />
    );

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3);
  });
});
