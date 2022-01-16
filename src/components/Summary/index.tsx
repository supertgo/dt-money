import TransactionBox from 'components/TransactionBox';
import { useTransactions } from 'hooks/TransactionContext';

import * as S from './styles';

const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  );

  return (
    <S.Wrapper>
      <TransactionBox amount={summary.deposits} />
      <TransactionBox type="outcome" amount={summary.withdraws} />
      <TransactionBox type="total" amount={summary.total} color="green" />
    </S.Wrapper>
  );
};

export default Summary;
