import React from 'react'

const Course = ({course}) => {
  return (
	<div>
	  <Header name={course.name}/>
	  <Content parts={course.parts} />
	  <Total parts={course.parts} />
	</div>
  )
}

const Header = ({name}) => {
  return <h2>{name}</h2>
}

const Content = ({parts}) => {
	return (
		<>
		  {parts.map(part =>
			  <Part key={part.id} part={part} />)}
		</>
	)
}

const Total = ({parts}) => {
  const array1 = parts.map(part => part.exercises)
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  return (
	<>
      <h4>total of {array1.reduce(reducer)} exercises</h4>
	</>
  )
}

const Part = ({part}) => {
  return (
    <>
	  <p>{part.name} {part.exercises}</p>
	</>
  )
}

export default Course
