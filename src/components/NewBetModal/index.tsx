import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { BetsContext } from '../../BetsContext'

import waitImg from '../../assets/wait.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import pushImg from '../../assets/push.svg'
import closeImg from '../../assets/close.svg'

import { Container, BetStatusContainer, RadioBox } from './styles'

interface NewBetModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewBetModal({ isOpen, onRequestClose }: NewBetModalProps) {
  const { createBet } = useContext(BetsContext)

  const [league, setLeague] = useState('')
  const [market, setMarket] = useState('')
  const [stake, setStake] = useState(0)
  const [odd, setOdd] = useState(0)
  const [betStatus, setBetStatus] = useState('wait')
  const [profit, setProfit] = useState(0)

  function handleCreateNewBet(event: FormEvent) {
    event.preventDefault()
  }

  createBet({
    league,
    market,
    stake,
    odd,
    profit,
    betStatus,
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewBet}>
        <h2>Cadastrar nova entrada</h2>

        <select
          value={league}
          onChange={event => setLeague(event.target.value)}
        >
          <option value="">Selecione a Liga</option>
          <option value="Alema">Alemã</option>
          <option value="Brasileira">Brasileira</option>
          <option value="Italiana">Italiana</option>
          <option value="Inglesa">Inglesa</option>
          <option value="Espanhola">Espanhola</option>
          <option value="Belga">Belga</option>
        </select>

        <select
          value={market}
          onChange={event => setMarket(event.target.value)}
        >
          <option value="">Selecione o Mercado</option>
          <option value="Back favorito">Back favorito</option>
          <option value="Lay zebra">Lay zebra</option>
          <option value="Over 0.5 HT">Over 0.5 HT</option>
          <option value="Over 0.5 FT">Over 0.5 FT</option>
          <option value="Over 1.5 FT">Over 1.5 FT</option>
          <option value="Under 0.5 FT">Under 0.5 FT</option>
          <option value="Under 1.5 FT">Under 1.5 FT</option>
        </select>

        <input
          type="number"
          placeholder="Stake"
          value={stake}
          onChange={event => setStake(Number(event.target.value))}
        />

        <input
          type="number"
          placeholder="Odd"
          value={odd}
          onChange={event => setOdd(Number(event.target.value))}
        />

        <input
          type="number"
          placeholder="Lucro"
          value={profit}
          onChange={event => setProfit(Number(event.target.value))}
        />

        <BetStatusContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setBetStatus('wait')
            }}
            isActive={betStatus === 'wait'}
            activeColor="white"
          >
            <img src={waitImg} alt="Wait" />
            <span>Wait</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setBetStatus('green')
            }}
            isActive={betStatus === 'green'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Green" />
            <span>Green</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setBetStatus('red')
            }}
            isActive={betStatus === 'red'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Red" />
            <span>Red</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setBetStatus('push')
            }}
            isActive={betStatus === 'push'}
            activeColor="gray"
          >
            <img src={pushImg} alt="Push" />
            <span>Push</span>
          </RadioBox>
        </BetStatusContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
