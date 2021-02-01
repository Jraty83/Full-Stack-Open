import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Content = (props) => {
  if (props.id === 1)
    return (
      <div>
        <Part name={props.parts[0].name} ex={props.parts[0].exercises} />
        <Part name={props.parts[1].name} ex={props.parts[1].exercises} />
        <Part name={props.parts[2].name} ex={props.parts[2].exercises} />
        <Part name={props.parts[3].name} ex={props.parts[3].exercises} />
      </div>
    )

  return (
    <div>
      <Part name={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part name={props.parts[1].name} ex={props.parts[1].exercises} />
    </div>
  )
}

const Total = (props) => {
  const array1 = (props.parts).map(ex => ex.exercises)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return (
    <h4>total of {array1.reduce(reducer)} exercises</h4>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.ex}
      </p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header course={course.name}/>
    <Content id={course.id} parts={course.parts} />
    <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
