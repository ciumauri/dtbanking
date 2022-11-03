import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

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

type BetInput = Omit<Bet, 'id' | 'createdAt'>

interface BetsProviderProps {
  children: ReactNode
}

interface BetsContextData {
  bets: Bet[]
  createBet: (bet: BetInput) => void
}

export const BetsContext = createContext<BetsContextData>({} as BetsContextData)

export function BetsProvider({ children }: BetsProviderProps) {
  const [bets, setBets] = useState<Bet[]>([])

  useEffect(() => {
    api.get('bets').then(response => setBets(response.data.bets))
  }, [])

  function createBet(bet: BetInput) {
    api.post('/bets', bet)
  }

  return (
    <BetsContext.Provider value={{ bets, createBet }}>
      {children}
    </BetsContext.Provider>
  )
}
