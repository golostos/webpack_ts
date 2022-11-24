import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

type Props = {}

function App({}: Props) {
  const [message, setMessage] = useState('')
  useEffect(() => {
    api.get('hello').then(res => {
      setMessage(res.data)
    })
  }, [])
  return (
    <div>
      <h1>React App</h1>
      <h3>Message from server:</h3>
      <h4>{message || 'loading...'}</h4>
    </div>
  )
}

export default App