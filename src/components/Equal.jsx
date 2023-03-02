import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Equal({ type }) {
  const { calculate } = useContext(Context)

  return (
    <button onClick={calculate}>
      {type}
    </button>
  )
}

export default Equal