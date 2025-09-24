export function formatTimerDisplay(milliseconds) {
  let second = Math.floor(milliseconds / 1000);
  let mlSecond = Math.floor((milliseconds % 1000) / 10);

  if (second < 10) second = "0" + second;
  if (mlSecond < 10) mlSecond = "0" + mlSecond;
  return `${second}:${mlSecond}`;
}
