import { useState } from 'react'

export const useStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key)
      return storageValue !== null ? JSON.parse(storageValue) : initialValue
    } catch (error) {
      console.error(error)
    }
  })

  const setStorageValue = (value) => {
    try {
      const serializedState = JSON.stringify(value)
      localStorage.setItem(key, serializedState)
    } catch (error) {
      console.error(error)
    }
  }

  const setStorageState = (payload) => {
    if (typeof payload !== 'function') {
      setState(payload)
      setStorageValue(payload)
      return
    }
    setState((prevState) => {
      const result = payload(prevState)
      setStorageValue(result)
      return result
    })
  }

  return [state, setStorageState]
}
