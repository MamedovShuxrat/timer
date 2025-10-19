import { useState, useEffect } from 'react'

export const useStorageState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const storageValue = localStorage.getItem(key)
    return storageValue !== null ? Number(storageValue) : initialValue
  })
  useEffect(() => {
    localStorage.setItem(key, storedValue)
  }, [storedValue])

  return [storedValue, setStoredValue]
}
