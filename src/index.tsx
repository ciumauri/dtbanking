import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    bet: Model,
  },

  seeds(server) {
    server.db.loadData({
      bets: [
        {
          id: 1,
          league: 'Brasileiro Série A',
          market: '1x',
          stake: 100,
          odd: 1.5,
          profit: 50,
          betStatus: 'green',
          createdAt: new Date('2022-10-27 15:00:00'),
        },
        {
          id: 2,
          league: 'Premier League',
          market: 'Back Favorito',
          stake: 100,
          odd: 1.8,
          profit: -100,
          betStatus: 'red',
          createdAt: new Date('2022-10-28 17:00:00'),
        },
        {
          id: 3,
          league: 'Italian Serie A',
          market: '2x',
          stake: 100,
          odd: 1.6,
          profit: 60,
          betStatus: 'green',
          createdAt: new Date('2022-10-29 19:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/bets', () => {
      return this.schema.all('bet')
    })

    this.post('/bets', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('bet', data)
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
