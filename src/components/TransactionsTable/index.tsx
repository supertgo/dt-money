import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { formatDate } from 'utils/formatDate';
import { formatPrice } from 'utils/formatPrice';
import * as S from './styles';

type Transaction = {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
};

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
          {transactions.map(
            ({ id, title, type, amount, category, createdAt }) => (
              <S.Tr key={id}>
                <S.Td>{title}</S.Td>
                <S.AmountTd type={type}>{formatPrice(amount)}</S.AmountTd>
                <S.Td>{category}</S.Td>
                <S.Td>{formatDate(new Date(createdAt))}</S.Td>
              </S.Tr>
            )
          )}
        </S.TBody>
      </S.Table>
    </S.Wrapper>
  );
};

export default TransactionsTable;
