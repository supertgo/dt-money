import Slider, { SliderSettings } from 'components/Slider';
import TransactionsColumn, {
  TransactionsColumnProps
} from 'components/TransactionsColumn';

import * as S from './styles';

export type TransactionsColumnSliderProps = {
  items: TransactionsColumnProps[];
};

const settings: SliderSettings = {
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3.2
      }
    }
  ]
};

const TransactionsColumnSlider = ({ items }: TransactionsColumnSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <TransactionsColumn key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default TransactionsColumnSlider;
