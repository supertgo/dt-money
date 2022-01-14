import * as S from './styles';

import logoImg from '../../../public/assets/logo.svg';

const Header = () => (
  <S.Header>
    <S.Content>
      <S.Image src={logoImg} alt="dt-money" />
      <S.Button type="button">Nova transação</S.Button>
    </S.Content>
  </S.Header>
);

export default Header;
