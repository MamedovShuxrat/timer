import { useState } from 'react'
import './App.css'
import TimerContainer from './components/TimerContainer'
import { formatTimerDisplay } from './utils/utils'
const REMAINING_TIME_MS = 5000

function App() {
  const [timerCountdownMs, setTimerCountdownMs] = useState(REMAINING_TIME_MS)
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
        timerCountdownMs={formatTimerDisplay(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
    </div>
  )
}

export default App
