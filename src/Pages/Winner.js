import { Link, useNavigate } from "react-router-dom";
import WinnerId from "./Components/WinnerId";
function Winner() {
  let navigate = useNavigate();
  const winner = window.localStorage.getItem("winner");
  const crossesScore = window.localStorage.getItem("crosses-score");
  const noughtsScore = window.localStorage.getItem("noughts-score");
  const currentValue = window.localStorage.getItem("tic-tac-toe");
  return (
    <div style={{ background: "#FF6D70", height: "100vh" }}>
      <div className="container winner">
        <header
          style={currentValue === "noughts" ? { alignItems: "flex-end" } : {}}
        >
          <div className="scores-group">
            <div className="scores">
              <div className="crosses-scores"></div>
              <div className="scores-item">
                {crossesScore ? crossesScore : 0}
              </div>
            </div>
            <div className="vs">vs</div>
            <div className="scores">
              <div className="scores-item">
                {noughtsScore ? noughtsScore : 0}
              </div>
              <div className="noughts-scores"></div>
            </div>
          </div>
          <div className="your-turn">YOUR TURN!</div>
        </header>
        <WinnerId winnerId={winner}></WinnerId>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <Link to="/">RESTART</Link>
        </button>
      </div>
    </div>
  );
}
export default Winner;
