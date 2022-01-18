import { TransactionProps } from 'hooks/TransactionContext';
import { formatDate } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';

import * as S from './styles';

export type TransactionsRowProps = TransactionProps;

const TransactionsRow = ({
  id,
  title,
  type,
  amount,
  category,
  createdAt
}: TransactionsRowProps) => (
  <S.Tr key={id}>
    <S.Td>{title}</S.Td>
    <S.AmountTd type={type as 'withdraw' | 'deposit'}>
      {formatPrice(amount)}
    </S.AmountTd>
    <S.Td>{category}</S.Td>
    <S.Td>{formatDate(new Date(createdAt))}</S.Td>
  </S.Tr>
);

export default TransactionsRow;
