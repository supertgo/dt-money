import { formatPrice } from 'utils/formatPrice';
import * as S from './styles';

export type TransactionBoxProps = {
  color?: 'shape' | 'green';
  type?: 'income' | 'outcome' | 'total';
  amount: number;
};

const TransactionBox = ({
  amount,
  color = 'shape',
  type = 'income'
}: TransactionBoxProps) => {
  function translateTypeToPortuguese(type: string) {
    if (type === 'income') return 'Entradas';
    else if (type === 'outcome') return 'Saídas';
    else return 'Total';
  }

  return (
    <S.Wrapper color={color}>
      <S.Header>
        <S.Text>{translateTypeToPortuguese(type)}</S.Text>
        <S.Image
          src={`/assets/${type}.svg`}
          alt={translateTypeToPortuguese(type)}
        />
      </S.Header>
      <S.Amount>{formatPrice(amount)}</S.Amount>
    </S.Wrapper>
  );
};

export default TransactionBox;
