import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
// useSelector helps in transfering the 'state' t this page which is Child2.js, 'messageReducer' is coming from 'store'
    const message = useSelector(state => state.messageReducer.message)
  return (
    <div>The data from Child1 is: {message}</div>
  )
}

export default Child2