import React from "react";

const TimerControls = ({ TimerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {!TimerOn && <button onClick={onStart}>Iniciar</button>}
      {TimerOn && <button onClick={onStop}>Parar</button>}
      {TimerOn && <button onClick={onLap}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  );
};

export default TimerControls;
