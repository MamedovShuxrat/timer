const TimerButton = ({ name, onClickCallback }) => {
  return (
    <button className="timerButton" onClick={onClickCallback}>
      {name}
    </button>
  );
};

export default TimerButton;
