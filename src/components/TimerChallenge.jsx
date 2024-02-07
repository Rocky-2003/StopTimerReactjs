import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();
  let [remaningTime, setRemaningTime] = useState(targetTime * 1000);
  // let {timerstarted, setTimerStarted] = useState(false);
  // let [timerExpired, setTimerExpired] = useState(false);
  const timerIsActive = remaningTime > 0 && remaningTime < targetTime * 1000;

  if (remaningTime <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
   
  }

  function handleReset(){
    setRemaningTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemaningTime((preRemaningTime) => {
        return preRemaningTime - 10;
      });
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} submitReset={handleReset} targetTime={targetTime} timeRemaning={remaningTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Timer
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
