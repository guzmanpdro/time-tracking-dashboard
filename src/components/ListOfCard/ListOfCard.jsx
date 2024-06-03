import { useStore } from '@nanostores/react'
import { timeframe } from '../../timeframeStore'
import Card from '../Card/Card'
import dataMock from '../../data.json'
import './index.css'

export default function ListOfCard() {
  const $timeframe = useStore(timeframe)

  return (
    <ul className="link-card-grid">
      {
        dataMock.map(el => {
          const { title, timeframes } = el;
          const { current, previous } = timeframes[$timeframe]

          return (
            <Card
              title={title}
              currentTime={current}
              lastTime={previous}
              key={title}
            />
          )
        })
      }
    </ul>
  )
}