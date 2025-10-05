const DISPLAY_DIGIT_COUNT = 2
const leadingZeroFormatter = (str) =>
  String(str).padStart(DISPLAY_DIGIT_COUNT, 0)

export function formatTimerDisplaySecMS(totalMs) {
  let totalSec = Math.floor(totalMs / 1000)
  let remainingMS = Math.floor((totalMs % 1000) / 10)
  return `${leadingZeroFormatter(totalSec)}:${leadingZeroFormatter(remainingMS)}`
}
