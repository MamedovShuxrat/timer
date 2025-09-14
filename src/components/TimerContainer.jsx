import TimerField from "./TimerField";
import TimerButton from "./TimerButton";

const TimerContainer = ({
  formatTimerDisplay,
  onClickCallbackStart,
  onClickCallbackPause,
}) => {
  return (
    <div>
      <TimerField value={formatTimerDisplay} />
      <div>
        <TimerButton name="Старт" onClickCallback={onClickCallbackStart} />
        <TimerButton name="Пауза" onClickCallback={onClickCallbackPause} />
      </div>
    </div>
  );
};

export default TimerContainer;
