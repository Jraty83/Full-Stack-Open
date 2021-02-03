import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
  
    if (isDuplicate(persons))
      window.alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(personObject))
  
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Numbers key={person.name} name={person.name} />)}
      </div>
    </div>
  )
}

export default App
