import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log('Header props:', props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
      <Part part={props.pt1} ex={props.ex1} />
      <Part part={props.pt2} ex={props.ex2} />
      <Part part={props.pt3} ex={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props:', props)
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const Part = (props) => {
  console.log('Part props:', props)
  return (
    <>
      <p>
        {props.part} {props.ex}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content pt1={part1.name} ex1={part1.exercises} pt2={part2.name} ex2={part2.exercises} pt3={part3.name} ex3={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
