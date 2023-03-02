import React, { useContext } from 'react'
import { Context } from '../context/Context'

function DeleteAll({ type }) {
  const { deleteAll, deleteAllStyle } = useContext(Context)

  return (
    <button className={deleteAllStyle} onClick={deleteAll}>
      {type}
    </button>
  )
}

export default DeleteAll