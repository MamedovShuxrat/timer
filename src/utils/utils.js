export function formatTimerDisplay(totalMs, displayDigitCount = 2) {
  let totalSec = Math.floor(totalMs / 1000) 
  let remainingMS = Math.floor((totalMs % 1000) / 10) 
  const leadingZeroFormatter = (str) =>
    String(str).padStart(displayDigitCount, 0)
  return `${leadingZeroFormatter(totalSec)}:${leadingZeroFormatter(remainingMS)}`
}
