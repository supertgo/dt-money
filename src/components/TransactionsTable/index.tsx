import TransactionsRow from 'components/TransactionsRow';
import { useTransactions } from 'hooks/TransactionContext';

import * as S from './styles';

const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <S.Wrapper>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Título</S.Th>
            <S.Th>Valor</S.Th>
            <S.Th>Categoria</S.Th>
            <S.Th>Data</S.Th>
          </S.Tr>
        </S.THead>

        <S.TBody>
          {transactions.map((transaction) => (
            <TransactionsRow key={transaction.id} {...transaction} />
          ))}
        </S.TBody>
      </S.Table>
    </S.Wrapper>
  );
};

export default TransactionsTable;
