import { timeframe } from '../../timeframeStore'
import './index.css'

const timeframes = {
  daily: 'Day',
  weekly: 'Week',
  monthly: 'Month',
}

export default function Card({ title, currentTime, lastTime, }) {
  return (
    <li className={`card-list ${title.toLowerCase()}`}>
      <article>
        <h2>
          {title}
          <img src="/images/icon-ellipsis.svg" alt="Ellipsis" />
        </h2>
        <h3>{currentTime}hrs
          <span className="previous">Last {timeframes[timeframe.value]} - {lastTime}hrs</span>
        </h3>
      </article>
    </li>
  )
}