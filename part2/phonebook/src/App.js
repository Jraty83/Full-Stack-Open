import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showFiltered, setShowFiltered ] = useState('')

  const numbersToShow = showFiltered === persons
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showFiltered.toLowerCase()))

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

  const handleFilterChange = (event) => {
    setShowFiltered(event.target.value)
  }

  const isDuplicate = () => {
    const dup = (element) => element === newName
    return (persons.map(e => e.name).some(dup))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input
            value={showFiltered}
            onChange={handleFilterChange}
          />
        </div>
      <h2>add a new</h2>
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
        {numbersToShow.map(person =>
          <Numbers key={person.name} name={person.name} number={person.number} />)}
      </div>
    </div>
  )
}

export default App
