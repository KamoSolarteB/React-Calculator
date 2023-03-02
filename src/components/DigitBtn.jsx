import React, { useContext } from 'react'
import { Context } from '../context/Context'

function DigitBtn({ dig }) {
  const { updateCalc, digitStyle } = useContext(Context)

  return (
    <button className={digitStyle} onClick={() => updateCalc(dig.toString())}>
      {dig}
    </button>
  )
}

export default DigitBtn