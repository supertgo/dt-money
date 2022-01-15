import { useEffect } from 'react';
import { api } from 'services/api';
import * as S from './styles';

export type TransactionsTableProps = {
  type?: 'deposit' | 'withdraw';
};

const TransactionsTable = ({ type = 'deposit' }: TransactionsTableProps) => {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
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
          <S.Tr>
            <S.Td>Desenvolvimento de Website</S.Td>
            <S.AmountTd type="withdraw">R$ 12.000,00</S.AmountTd>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/21</S.Td>
          </S.Tr>

          <S.Tr>
            <S.Td>Desenvolvimento de Website</S.Td>
            <S.AmountTd type={type}>R$ 12.000,00</S.AmountTd>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/21</S.Td>
          </S.Tr>

          <S.Tr>
            <S.Td>Desenvolvimento de Website</S.Td>
            <S.AmountTd type={type}>R$ 12.000,00</S.AmountTd>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/21</S.Td>
          </S.Tr>
        </S.TBody>
      </S.Table>
    </S.Wrapper>
  );
};

export default TransactionsTable;
