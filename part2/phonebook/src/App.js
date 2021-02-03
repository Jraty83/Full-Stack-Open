import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/Form'
import Persons from './components/Persons'

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
      <Filter value={showFiltered} filterUp={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm name={newName} number={newNumber} submit={addNumber} personUp={handlePersonChange} numberUp={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons show={numbersToShow} />
    </div>
  )
}

export default App
