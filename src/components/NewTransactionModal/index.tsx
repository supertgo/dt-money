import Modal from 'react-modal';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar transação</h2>
    </Modal>
  );
};

export default NewTransactionModal;
