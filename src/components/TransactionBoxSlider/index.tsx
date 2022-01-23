import Slider, { SliderSettings } from 'components/Slider';
import TransactionBox, { TransactionBoxProps } from 'components/TransactionBox';

import * as S from './styles';

export type TransactionBoxSliderProps = {
  items: TransactionBoxProps[];
};

const settings: SliderSettings = {
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.2
      }
    }
  ]
};

const TransactionBoxSlider = ({ items }: TransactionBoxSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <TransactionBox key={item.type} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default TransactionBoxSlider;
