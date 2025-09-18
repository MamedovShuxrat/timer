import TimerField from "./TimerField";
import TimerButton from "./TimerButton";

const TimerContainer = ({ timeOfMs, onClickCallbackStart, onClickCallbackPause }) => {
  return (
    <div>
      <TimerField value={timeOfMs} />
      <div>
        <TimerButton name="Старт" onClickCallback={onClickCallbackStart} />
        <TimerButton name="Пауза" onClickCallback={onClickCallbackPause} />
      </div>
    </div>
  );
};

export default TimerContainer;
