import * as S from './styles';

const Header = () => (
  <S.Header>
    <S.Content>
      <S.Image src="/assets/logo.svg" alt="dt-money" />
      <S.Button type="button">Nova transação</S.Button>
    </S.Content>
  </S.Header>
);

export default Header;
