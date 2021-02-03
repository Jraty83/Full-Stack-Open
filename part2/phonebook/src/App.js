import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName, number: newNumber
    }
  
    if (isDuplicate(persons))
      window.alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(personObject))
  
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isDuplicate = () => {
    const dup = (element) => element === newName
    return (persons.map(e => e.name).some(dup))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Numbers key={person.name} name={person.name} number={person.number} />)}
      </div>
    </div>
  )
}

export default App
