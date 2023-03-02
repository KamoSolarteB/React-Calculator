import React, { useContext } from 'react'
// import { Context } from './context/Context'
import { DeleteBtn, DigitBtn, Equal, OperatorBtn } from './components'

function App() {
  // const { phrase } = useContext(Context)
  return (
    <div>
      <DeleteBtn/>
      <DigitBtn/>
      <Equal/>
      <OperatorBtn/>
    </div>
  )
}

export default App