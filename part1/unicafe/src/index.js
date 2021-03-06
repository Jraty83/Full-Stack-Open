import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text,value,percentage}) => (
  <tr>
    <td>{text}</td><td>{value} {percentage}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  const all = (good + neutral + bad)
  const average = (good - bad) / (good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  if (all === 0)
    return <p>No feedback given</p>

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={all} />
        <Statistic text='average' value={average} />
        <Statistic text='positive' value={positive} percentage='%'/>
      </tbody>
    </table>
  )
}

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
