export function formatTimerDisplay(totalMs) {
  let totalSec = Math.floor(totalMs / 1000).toString()
  let remainingMS = Math.floor((totalMs % 1000) / 10).toString()
 
  return `${totalSec.padStart(2, 0)}:${remainingMS.padStart(2 , 0)}`
}
