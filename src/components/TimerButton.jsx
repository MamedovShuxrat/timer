const TimerButton = ({ name, onClickCallback }) => {
  return (
    <button onClick={onClickCallback}>
      {name}
    </button>
  );
};

export default TimerButton;
