import React, { useContext } from 'react'
import { Context } from '../context/Context'

function OperatorBtn({ operator }) {
  const { updateCalc } = useContext(Context)

  return (
    <button onClick={() => updateCalc(operator)}>
      {operator}
    </button>
  )
}

export default OperatorBtn