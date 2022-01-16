import { useState } from 'react';

import { useTransactions } from 'hooks/TransactionContext';

import Modal from 'react-modal';

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
  const { createTransaction } = useTransactions();

  const [transaction, setTransaction] = useState({
    title: '',
    value: 10,
    category: '',
    type: 'deposit'
  });

  const [transactionType, setTransactionType] = useState('deposit');

  function handleTransaction(key: string, value: number | string) {
    setTransaction({
      ...transaction,
      [key]: value
    });
  }

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    await createTransaction({
      title: transaction.title,
      type: transaction.type,
      amount: transaction.value,
      category: transaction.category
    });

    setTransaction({
      type: transactionType,
      title: '',
      value: 10,
      category: ''
    });

    onRequestClose();
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
            isActive={transactionType === 'deposit'}
            activeColor="green"
            onClick={() => {
              setTransactionType('deposit');
              handleTransaction('type', 'deposit');
            }}
          >
            <S.Image src="/assets/income.svg" alt="Entrada" />
            <S.Text>Entrada</S.Text>
          </S.TransactionButton>

          <S.TransactionButton
            isActive={transactionType === 'withdraw'}
            activeColor="red"
            onClick={() => {
              setTransactionType('withdraw');
              handleTransaction('type', 'withdraw');
            }}
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
