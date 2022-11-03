import { useContext } from 'react'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { BetsContext } from '../../BetsContext'
import { Container } from './styles'

export function Summary() {
  const bets = useContext(BetsContext)
  console.log(bets)

  return (
    <Container>
      <div>
        <header>
          <p>Greens</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Reds</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$1.259,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Banca Atual</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$16.141,00</strong>
      </div>
    </Container>
  )
}
