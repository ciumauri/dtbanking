import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface Bet {
  id: number
  league: string
  market: string
  stake: number
  odd: number
  betStatus: string
  profit: number
  createdAt: string
}

export function BetTable() {
  const [bets, setBets] = useState<Bet[]>([])

  useEffect(() => {
    api.get('bets').then(response => setBets(response.data.bets))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Liga</th>
            <th>Mercado</th>
            <th>Stake</th>
            <th>ODD</th>
            <th>Status</th>
            <th>Lucro</th>
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
              <td className={bet.betStatus}>{bet.betStatus}</td>
              <td className={bet.betStatus}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(bet.profit)}
              </td>
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
