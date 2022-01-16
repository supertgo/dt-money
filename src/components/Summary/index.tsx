import TransactionBox from 'components/TransactionBox';
import { TransactionContext } from 'hooks/TransactionContext';
import { useContext } from 'react';
import * as S from './styles';

const Summary = () => {
  const data = useContext(TransactionContext);

  console.log(data);

  return (
    <S.Wrapper>
      <TransactionBox amount={1000} />
      <TransactionBox type="outcome" amount={500} />
      <TransactionBox type="total" amount={500} color="green" />
    </S.Wrapper>
  );
};

export default Summary;
