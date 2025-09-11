import { useState } from 'react'
import './App.css'
import TimerContainer from './assets/components/TimerContainer'

function App() {
  const [timer, setTimer] = useState(5000)

  function formatTimer(seconds) {
    let second = Math.floor(seconds) / 1000
    let mlSecond = Math.floor((seconds % 1000) / 10)

    if (second < 10) second = '0' + second
    if (mlSecond < 10) mlSecond = '0' + mlSecond
    return `${second}:${mlSecond}`
  }

  console.log(formatTimer(timer));

  formatTimer(timer)


  return (
    <>
      <div>
        <h1>timers</h1>
        <TimerContainer formatTimer={formatTimer(timer)} />
      </div>
    </>
  )
}

export default App
