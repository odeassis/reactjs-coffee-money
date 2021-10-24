import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  const [
    isNewTransactionModalOpen, 
    setIsNewTransactionModalOpen,
  ] = useState(false); 

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
   <>
    <Header
      onOpenNewTransitionModal={handleOpenNewTransactionModal}
    />

    <Dashboard />

    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>

    <GlobalStyles />
   </>
  );
}

