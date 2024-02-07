import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaning, submitReset },
  ref
) {
  let userLost = timeRemaning <= 0;
  let formattedReamaningTime = (timeRemaning / 1000).toFixed(2);
  let dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>{userLost && "You lost"}</h2>
      <p>
        The target time was <strong> {targetTime}</strong>
      </p>
      <p>
        You stop the timer with{" "}
        <strong>{formattedReamaningTime} seconds left</strong>
      </p>
      <form action="dialog" onSubmit={submitReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
