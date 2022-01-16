import Summary from 'components/Summary';
import TransactionsTable from 'components/TransactionsTable';
import * as S from './styles';

const Dashboard = () => (
  <S.Wrapper>
    <Summary />
    <TransactionsTable />
  </S.Wrapper>
);

export default Dashboard;
