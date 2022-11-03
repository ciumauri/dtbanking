import { useContext } from 'react'
import { BetsContext } from '../../BetsContext'
import { Container } from './styles'

export function BetTable() {
  const { bets } = useContext(BetsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Liga</th>
            <th>Mercado</th>
            <th>Stake</th>
            <th>Odd</th>
            <th>Profit</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {bets.map(bet => (
            <tr key={bet.id}>
              <td>{bet.league}</td>
              <td>{bet.market}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(bet.stake)}
              </td>
              <td>{bet.odd}</td>
              <td className={bet.betStatus}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(bet.profit)}
              </td>
              <td className={bet.betStatus}>{bet.betStatus}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(bet.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
