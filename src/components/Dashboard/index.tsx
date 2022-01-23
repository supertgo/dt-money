import MediaMatch from 'components/MediaMatch';
import Summary from 'components/Summary';
import TransactionsColumnSlider from 'components/TransactionsColumnSlider';
import TransactionsTable from 'components/TransactionsTable';
import { useTransactions } from 'hooks/TransactionContext';

import * as S from './styles';

const Dashboard = () => {
  const { transactions } = useTransactions();

  return (
    <S.Wrapper>
      <Summary />
      <MediaMatch greaterThan="medium">
        <TransactionsTable />
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.TransactionList>
          <S.Flex>
            <S.ListTitle>Listagem</S.ListTitle>
            <S.ListItems>{`${transactions.length} itens`}</S.ListItems>
          </S.Flex>

          <TransactionsColumnSlider items={transactions} />
        </S.TransactionList>
      </MediaMatch>
    </S.Wrapper>
  );
};

export default Dashboard;
