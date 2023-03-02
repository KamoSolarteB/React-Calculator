import React, { useContext } from 'react'
import { Context } from '../context/Context'

function OperatorBtn({ operator }) {
  const { updateCalc, operatorStyle } = useContext(Context)

  return (
    <button className={operatorStyle} onClick={() => updateCalc(operator)}>
      {operator}
    </button>
  )
}

export default OperatorBtn