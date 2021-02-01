import React from 'react'

const Course = ({course}) => {
  return (
	<>
	  <Header course={course.name}/>
	  <Content id={course.id} parts={course.parts} />
	  <Total parts={course.parts} />
	</>
  )
}

const Header = (props) => {
  return <h2>{props.course}</h2>
}
  
const Content = (props) => {
  if (props.id === 1) {
    return (
	  <div>
	    <Part name={props.parts[0].name} ex={props.parts[0].exercises} />
	    <Part name={props.parts[1].name} ex={props.parts[1].exercises} />
	    <Part name={props.parts[2].name} ex={props.parts[2].exercises} />
	    <Part name={props.parts[3].name} ex={props.parts[3].exercises} />
	  </div>
	)
  }

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
	  <p>{props.name} {props.ex}</p>
	</>
  )
}

export default Course
