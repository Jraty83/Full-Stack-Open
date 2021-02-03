import React from 'react'
import Numbers from './Numbers'

const Persons = ({ show }) => {
  return (
    <div>
      {show.map(person =>
        <Numbers key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default Persons
