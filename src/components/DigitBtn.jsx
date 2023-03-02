import React, { useContext } from 'react'
import { Context } from '../context/Context'

function DigitBtn({ dig }) {
  const { updateCalc } = useContext(Context)

  return (
    <button onClick={() => updateCalc(dig.toString())}>
      {dig}
    </button>
  )
}

export default DigitBtn