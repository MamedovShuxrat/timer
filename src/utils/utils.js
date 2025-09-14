export function formatTimerDisplay(seconds) {
  let second = Math.floor(seconds) / 1000;
  let mlSecond = Math.floor((seconds % 1000) / 10);

  if (second < 10) second = "0" + second;
  if (mlSecond < 10) mlSecond = "0" + mlSecond;
  return `${second}:${mlSecond}`;
}
