import TimerField from "./TimerField";
import TimerButton from "./TimerButton";

const TimerContainer = ({
  formatTimer,
  onClickCallbackStart,
  onClickCallbackPause,
}) => {
  return (
    <div>
      <TimerField value={formatTimer} />
      <div>
        <TimerButton name="Старт" onClickCallback={onClickCallbackStart} />
        <TimerButton name="Пауза" onClickCallback={onClickCallbackPause} />
      </div>
    </div>
  );
};

export default TimerContainer;
