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

interface BetsProviderProps {
  children: ReactNode
}

export const BetsContext = createContext<Bet[]>([])

export function BetsProvider({ children }: BetsProviderProps) {
  const [bets, setBets] = useState<Bet[]>([])

  useEffect(() => {
    api.get('bets').then(response => setBets(response.data.bets))
  }, [])

  return <BetsContext.Provider value={bets}>{children}</BetsContext.Provider>
}
