import TransactionBox from 'components/TransactionBox';
import * as S from './styles';

const Summary = () => (
  <S.Wrapper>
    <TransactionBox amount={1000} />
    <TransactionBox type="outcome" amount={500} />
    <TransactionBox type="total" amount={500} color="green" />
  </S.Wrapper>
);

export default Summary;
