import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helpers';
import TransactionBox from 'components/TransactionBox';

import TransactionBoxSlider from '.';

describe('<TransactionBoxSlider />', () => {
  it('should render be three items', () => {
    const { container } = renderWithTheme(
      <TransactionBoxSlider>
        <TransactionBox amount={100} />
        <TransactionBox type="outcome" amount={500} />
        <TransactionBox type="total" amount={500} color="green" />
      </TransactionBoxSlider>
    );

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3);
  });
});
