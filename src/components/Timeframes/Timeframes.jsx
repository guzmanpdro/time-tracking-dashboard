import { timeframe } from '../../timeframeStore'
import './index.css'

export default function Timeframes() {
  function handleChange(e) {
    timeframe.set(e.target.value)
  }

  return (
    <div className='time-period'>
      <input type="radio" name="period-time" id="daily" value='daily' onChange={(e) => handleChange(e)} />
      <label htmlFor="daily">Daily</label>
      <input type="radio" name="period-time" id="weekly" value='weekly' defaultChecked onChange={(e) => handleChange(e)} />
      <label htmlFor="weekly">Weekly</label>
      <input type="radio" name="period-time" id="monthly" value='monthly' onChange={(e) => handleChange(e)} />
      <label htmlFor="monthly">Monthly</label>
    </div>
  )
}