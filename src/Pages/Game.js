import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer, useRef } from "react";
import GameValue from "./Components/GameValue";
const reducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};
function Game() {
  let navigate = useNavigate();
  const lastValue = window.localStorage.getItem("tic-tac-toe");
  const crossesScore = window.localStorage.getItem("crosses-score");
  const noughtsScore = window.localStorage.getItem("noughts-score");
  const crosses = useRef(crossesScore);
  const noughts = useRef(noughtsScore);
  const [currentValue, setCurrentValue] = useState(lastValue);
  const [scores, setScores] = useState({
    crosses: crosses.current,
    noughts: noughts.current,
  });
  const [winner, setWinner] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
  });

  //  最初始化：如果localStorage沒有值就先預設值
  useEffect(() => {
    if (!lastValue) {
      setCurrentValue("crosses");
    }
    if (!crossesScore) {
      crosses.current = 0;
      setScores((state) => ({ ...state, crosses: crosses.current }));
    }
    if (!noughtsScore) {
      noughts.current = 0;
      setScores((state) => ({ ...state, noughts: noughts.current }));
    }
  }, [crossesScore, lastValue, noughtsScore]);

  // 誰是贏家函式
  const isWinner = (value) => {
    if (value === "crosses") {
      crosses.current++;
      setScores((state) => ({ ...state, crosses: crosses.current }));
      setWinner("crosses");
      window.localStorage.setItem("crosses-score", crosses.current);
    } else if (value === "noughts") {
      noughts.current++;
      setScores((state) => ({ ...state, noughts: noughts.current }));
      setWinner("noughts");
      window.localStorage.setItem("noughts-score", noughts.current);
    } else {
      setWinner("both");
    }
  };

  //  判斷圈圈叉叉是否有成立
  useEffect(() => {
    switch (true) {
      case state.value1 === state.value2 &&
        state.value1 === state.value3 &&
        state.value1 !== "":
        isWinner(state.value1);
        break;
      case state.value4 === state.value5 &&
        state.value4 === state.value6 &&
        state.value4 !== "":
        isWinner(state.value4);
        break;
      case state.value7 === state.value8 &&
        state.value7 === state.value9 &&
        state.value7 !== "":
        isWinner(state.value7);
        break;
      case state.value1 === state.value5 &&
        state.value1 === state.value9 &&
        state.value1 !== "":
        isWinner(state.value1);
        break;
      case state.value3 === state.value5 &&
        state.value3 === state.value7 &&
        state.value3 !== "":
        isWinner(state.value3);
        break;
      case state.value1 === state.value4 &&
        state.value1 === state.value7 &&
        state.value1 !== "":
        console.log("1");
        isWinner(state.value1);
        break;
      case state.value2 === state.value5 &&
        state.value2 === state.value8 &&
        state.value2 !== "":
        console.log("2");
        isWinner(state.value2);
        break;
      case state.value3 === state.value6 &&
        state.value3 === state.value9 &&
        state.value3 !== "":
        console.log("3");
        isWinner(state.value3);
        break;
      case Object.values(state).includes(""):
        break;
      default:
        isWinner();
        break;
    }
  }, [
    state,
    state.value1,
    state.value2,
    state.value3,
    state.value4,
    state.value5,
    state.value6,
    state.value7,
    state.value8,
    state.value9,
  ]);

  // 如果winner有值就轉頁面
  useEffect(() => {
    if (!winner) return;
    window.localStorage.setItem("winner", winner);
    window.localStorage.setItem("tic-tac-toe", currentValue);
    navigate("/winner");
  }, [currentValue, navigate, winner]);

  return (
    <div style={{ background: "#FF6D70", height: "100vh" }}>
      <div className="container game">
        <header
          style={currentValue === "noughts" ? { alignItems: "flex-end" } : {}}
        >
          <div className="scores-group">
            <div className="scores">
              <div className="crosses-scores"></div>
              <div className="scores-item">{scores.crosses}</div>
            </div>
            <div className="vs">vs</div>
            <div className="scores">
              <div className="scores-item">{scores.noughts}</div>
              <div className="noughts-scores"></div>
            </div>
          </div>
          <div className="your-turn">YOUR TURN!</div>
        </header>
        <ul>
          <GameValue
            state={state}
            dispatch={dispatch}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </ul>
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
export default Game;
