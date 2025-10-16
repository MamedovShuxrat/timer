import { useState, useEffect } from 'react'

export const useStorageState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const savedTimerData = localStorage.getItem(key)
    if (savedTimerData !== null) {
      return Number(savedTimerData)
    } else {
      return initialValue
    }
  })
  useEffect(() => {
    localStorage.setItem(key, storedValue)
  }, [storedValue])

  return [storedValue, setStoredValue]
}
