import { TransactionProps } from 'hooks/TransactionContext';
import { formatDate } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';
import * as S from './styles';
export type TransactionsColumnProps = Omit<TransactionProps, 'id'>;

const TransactionsColumn = ({
  title,
  type,
  amount,
  category,
  createdAt
}: TransactionsColumnProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Amount type={type as 'withdraw' | 'deposit'}>
      {formatPrice(amount)}
    </S.Amount>
    <S.Flex>
      <S.Category>{category}</S.Category>
      <S.Date>{formatDate(new Date(createdAt))}</S.Date>
    </S.Flex>
  </S.Wrapper>
);

export default TransactionsColumn;
