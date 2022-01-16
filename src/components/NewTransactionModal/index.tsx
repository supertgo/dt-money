import { useState } from 'react';
import Modal from 'react-modal';
import { api } from 'services/api';
import * as S from './styles';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#__next');
type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const [transaction, setTransaction] = useState({
    title: '',
    value: 50,
    category: '',
    type: 'deposit'
  });

  function handleTransaction(key: string, value: number | string) {
    setTransaction({
      ...transaction,
      [key]: value
    });
  }

  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    const data = { transaction };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.CloseButton onClick={onRequestClose}>
        <S.Image src="/assets/close.svg" alt="Fechar modal" />
      </S.CloseButton>

      <S.Form onSubmit={handleCreateNewTransaction}>
        <S.Title>Cadastrar transação</S.Title>

        <S.Input
          required
          value={transaction.title}
          onChange={({ target }) =>
            handleTransaction('title', (target as HTMLInputElement).value)
          }
          placeholder="Título"
        />
        <S.Input
          required
          value={transaction.value}
          onChange={({ target }) =>
            handleTransaction(
              'value',
              Number((target as HTMLInputElement).value)
            )
          }
          type="number"
          placeholder="Valor"
        />

        <S.TransactionTypeContainer>
          <S.TransactionButton
            isActive={transaction.type === 'deposit'}
            activeColor="green"
            onClick={() => handleTransaction('type', 'deposit')}
          >
            <S.Image src="/assets/income.svg" alt="Entrada" />
            <S.Text>Entrada</S.Text>
          </S.TransactionButton>

          <S.TransactionButton
            isActive={transaction.type === 'withdraw'}
            activeColor="red"
            onClick={() => handleTransaction('typ', 'withdraw')}
          >
            <S.Image src="/assets/outcome.svg" alt="Saída" />
            <S.Text>Saída</S.Text>
          </S.TransactionButton>
        </S.TransactionTypeContainer>

        <S.Input
          required
          onChange={({ target }) =>
            handleTransaction('category', (target as HTMLInputElement).value)
          }
          placeholder="Categoria"
        />

        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </Modal>
  );
};

export default NewTransactionModal;
