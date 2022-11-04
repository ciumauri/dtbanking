import { useBets } from '../../hooks/useBets'

import greenImg from '../../assets/green.svg'
import redImg from '../../assets/red.svg'
import totalImg from '../../assets/total.svg'
import { Container } from './styles'

export function Summary() {
  const { bets } = useBets()

  const summary = bets.reduce(
    (acc, bet) => {
      if (bet.betStatus === 'green') {
        acc.green += bet.profit
        acc.total += bet.profit
      } else {
        acc.red += bet.profit
        acc.total -= bet.profit
      }
      return acc
    },
    {
      green: 0,
      red: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Greens</p>
          <img src={greenImg} alt="Green's" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.green)}
        </strong>
      </div>
      <div>
        <header>
          <p>Reds</p>
          <img src={redImg} alt="Red's" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.red)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Banca Atual</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
