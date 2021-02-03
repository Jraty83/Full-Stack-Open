import React from 'react'

const PersonForm = ({ name,number,submit,personUp,numberUp }) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <input
          value={name}
          onChange={personUp}
        />
      </div>
      <div>
        number: <input
          value={number}
          onChange={numberUp}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
