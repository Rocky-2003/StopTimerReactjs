import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let [timesStarted, setTimerStarted] = useState(false);
  let [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    setTimerStarted(false);
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>{timerExpired ? "You lost!" : ""}</p>

      <p>
        <button onClick={timesStarted ? handleStop : handleStart}>
          {timesStarted ? "Stop" : "Start"} Timer
        </button>
      </p>
      <p className={timesStarted ? "active" : ""}>
        {" "}
        {timesStarted ? "Timer is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
