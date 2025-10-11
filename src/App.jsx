import { useEffect, useState } from 'react'
import './App.css'
import TimerContainer from './components/TimerContainer'
import { formatTimerDisplaySecMS } from './utils/utils'
const REMAINING_TIME_MS = 5000

function App() {
  const [timerCountdownMs, setTimerCountdownMs] = useState(REMAINING_TIME_MS)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    const savedTimerData = localStorage.getItem('saveTimerCountsDownMS')
    if (savedTimerData !== null) {
      setTimerCountdownMs(Number(savedTimerData))
    }
  }, [])

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
        localStorage.setItem('saveTimerCountsDownMS', prev - 10)
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
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
      <TimerContainer
        timerCountdownMs={formatTimerDisplaySecMS(timerCountdownMs)}
        onClickCallbackStart={startTimer}
        onClickCallbackPause={pauseTimer}
      />
    </div>
  )
}

export default App
