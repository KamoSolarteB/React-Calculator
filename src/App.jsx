import React, { useContext } from 'react'
import { Context } from './context/Context'

function App() {
  const { phrase } = useContext(Context)
  return (
    <div>{phrase}</div>
  )
}

export default App