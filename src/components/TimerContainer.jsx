import TimerField from "./TimerField";
import TimerButton from "./TimerButton";

const TimerContainer = ({ timerCountdownMs, onClickCallbackStart, onClickCallbackPause }) => {
  return (
    <div>
      <TimerField value={timerCountdownMs} />
      <div>
        <TimerButton name="Старт" onClickCallback={onClickCallbackStart} />
        <TimerButton name="Пауза" onClickCallback={onClickCallbackPause} />
      </div>
    </div>
  );
};

export default TimerContainer;
