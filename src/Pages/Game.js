import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer, useRef } from "react";
const reducer = (state, action) => {
  // console.log(action.type, action.payload);
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
      setScores((state)=>({...state,crosses:crosses.current}))
    }
    if (!noughtsScore) {
      noughts.current = 0;
      setScores((state)=>({...state,noughts:noughts.current}))
    }
  }, [crossesScore, lastValue, noughtsScore]);

  // 設定dispatch & payload & 切換目前要下圈還是叉
  const handleClick = (e) => {
    dispatch({ type: e.target.id, payload: currentValue });
    if (currentValue === "noughts") {
      setCurrentValue("crosses");
    } else {
      setCurrentValue("noughts");
    }
  };

  // 誰是贏家函式
  const isWinner = (value) => {
    console.log("1", value, "1");
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
          {/* {state.map((item)=>(
            <li onClick={handleClick} id={item} className={item} key={item}></li>  
          ))} */}
          <li onClick={handleClick} id="value1" className={state.value1}></li>
          <li onClick={handleClick} id="value2" className={state.value2}></li>
          <li onClick={handleClick} id="value3" className={state.value3}></li>
          <li onClick={handleClick} id="value4" className={state.value4}></li>
          <li onClick={handleClick} id="value5" className={state.value5}></li>
          <li onClick={handleClick} id="value6" className={state.value6}></li>
          <li onClick={handleClick} id="value7" className={state.value7}></li>
          <li onClick={handleClick} id="value8" className={state.value8}></li>
          <li onClick={handleClick} id="value9" className={state.value9}></li>
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
