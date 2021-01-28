import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Vote = ({handleClick,text,}) => (
  <button onClick={handleClick}>{text}</button>
)

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const zeros = new Array(6).fill(0)
  const [points, setPoints] = useState(zeros)
  const copy = [...points]
  const max = Math.max(...points)
  const index = points.indexOf(max)

  copy[selected] += 1
 
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Vote handleClick={() => setPoints(copy)} text='vote' />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[index]}</p>
      <p>has {max} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
