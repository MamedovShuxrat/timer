import { useState } from "react";
import "./App.css";
import TimerContainer from "./assets/components/TimerContainer";

function App() {
  const [timer, setTimer] = useState(5000);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  function formatTimer(seconds) {
    let second = Math.floor(seconds) / 1000;
    let mlSecond = Math.floor((seconds % 1000) / 10);

    if (second < 10) second = "0" + second;
    if (mlSecond < 10) mlSecond = "0" + mlSecond;
    return `${second}:${mlSecond}`;
  }
  function startTimer() {
    if (isRunning) return;
    setIsRunning(true);

    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          setIsRunning(false);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    setIntervalId(id);
  }
  function pauseTimer() {
    setIsRunning(false);
    clearInterval(intervalId);
  }

  return (
    <>
      <div>
        <h1>Timer</h1>
        <TimerContainer
          formatTimer={formatTimer(timer)}
          onClickCallbackStart={startTimer}
          onClickCallbackPause={pauseTimer}
        />
      </div>
    </>
  );
}

export default App;
