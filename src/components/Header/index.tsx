import * as S from './styles';

export type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Header>
      <S.Content>
        <S.Image src="/assets/logo.svg" alt="dt-money" />
        <S.Button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </S.Button>
      </S.Content>
    </S.Header>
  );
};

export default Header;
