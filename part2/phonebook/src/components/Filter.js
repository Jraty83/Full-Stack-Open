import React from 'react'

const Filter = ({ value,filterUp }) => {
  return (
    <div>
      filter shown with <input
        value={value}
        onChange={filterUp}
      />
    </div>
  )
}

export default Filter
