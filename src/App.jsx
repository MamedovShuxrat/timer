import { useState } from "react";
import "./App.css";
import TimerContainer from "./components/TimerContainer";
const REMAINING_TIME_MS = 5000;

function App() {
  const [timeOfMs, setTimeOfMs] = useState(REMAINING_TIME_MS);

  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  function startTimer() {
    if (isRunning) return;
    setIsRunning(true);

    const id = setInterval(() => {
      setTimeOfMs((prev) => {
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
        <TimerContainer timeOfMs={timeOfMs} onClickCallbackStart={startTimer} onClickCallbackPause={pauseTimer} />
      </div>
    </>
  );
}

export default App;
