import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Equal({ type }) {
  const { calculate, operatorStyle } = useContext(Context)

  return (
    <button className={operatorStyle} onClick={calculate}>
      {type}
    </button>
  )
}

export default Equal