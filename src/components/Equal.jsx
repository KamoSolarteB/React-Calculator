import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Equal({ type }) {
  const { calculate, digitStyle } = useContext(Context)

  return (
    <button className={digitStyle} onClick={calculate}>
      {type}
    </button>
  )
}

export default Equal