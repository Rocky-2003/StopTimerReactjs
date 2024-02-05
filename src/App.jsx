import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not easy"} targetTime={5} />
        <TimerChallenge title={"Getting tough"} targetTime={7} />
        <TimerChallenge title={"Pros only"} targetTime={10} />
      </div>
    </>
  );
}

export default App;
