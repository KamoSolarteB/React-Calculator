import React, { useContext } from 'react'
import { Context } from '../context/Context'

function DeleteBtn({ type }) {
  const { deleteLast } = useContext(Context)

  return (
    <button onClick={deleteLast}>
      {type}
    </button>
  )
}

export default DeleteBtn