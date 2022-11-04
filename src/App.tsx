import Modal from 'react-modal'

import { useState } from 'react'

import { BetsProvider } from './hooks/useBets'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewBetModal } from './components/NewBetModal'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewBetModalOpen, setIsNewBetModalOpen] = useState(false)

  function handleOpenNewBetModal() {
    setIsNewBetModalOpen(true)
  }

  function handleCloseNewBetModal() {
    setIsNewBetModalOpen(false)
  }

  return (
    <BetsProvider>
      <Header onOpenNewBetModal={handleOpenNewBetModal} />

      <Dashboard />

      <NewBetModal
        isOpen={isNewBetModalOpen}
        onRequestClose={handleCloseNewBetModal}
      />

      <GlobalStyle />
    </BetsProvider>
  )
}
