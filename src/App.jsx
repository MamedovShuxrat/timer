import { useState } from 'react'
import './App.css'
import TimerContainer from './components/TimerContainer'
import { useStorageState } from './hooks/useStorageState'
import { LOCAL_STORAGE_KEY } from './constants/storage'
import { REMAINING_TIME_MS } from './constants/config'
import { formatTimerDisplaySecMS } from './utils/utils'

function App() {
  const [timerCountdownMs, setTimerCountdownMs] = useStorageState(
    LOCAL_STORAGE_KEY.REMAINING_TIME_MS,
    REMAINING_TIME_MS
  )

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  function startTimer() {
    if (isTimerRunning) return
    setIsTimerRunning(true)

    const id = setInterval(() => {
      setTimerCountdownMs((prev) => {
        if (prev <= 0) {
          clearInterval(id)
          setIsTimerRunning(false)
          return 0
        }
        return prev - 10
      })
    }, 10)

    setIntervalId(id)
  }
  function pauseTimer() {
    setIsTimerRunning(false)
    clearInterval(intervalId)
  }

  return (
    <div>
      <h1>Timer</h1>
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
    </div>
  )
}

export default App
