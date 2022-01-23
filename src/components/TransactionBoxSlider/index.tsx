import Slider, { SliderSettings } from 'components/Slider';

import * as S from './styles';

export type TransactionBoxSliderProps = {
  children: React.ReactNode;
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

const TransactionBoxSlider = ({ children }: TransactionBoxSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>{children}</Slider>
  </S.Wrapper>
);

export default TransactionBoxSlider;
