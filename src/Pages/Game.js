import { Link,useNavigate } from "react-router-dom";
function Game() {
  let navigate = useNavigate();

  return (
    <div style={{background:'#FF6D70',height:"100vh"}}>
      <div className="container game">
        <header>
          <div className="scores-group">
            <div className="scores">
              <div className="crosses-scores"></div>
              <div className="scores-item">12</div>
            </div>
            <div className="vs">vs</div>
            <div className="scores">
              <div className="scores-item">10</div>
              <div className="noughts-scores"></div>
            </div>
          </div>
          <div className="your-turn">YOUR TURN!</div>
        </header>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button onClick={()=>{navigate("/winner")}}>
          <Link to="/winner">RESTART</Link>
        </button>
      </div>
    </div>
  );
}
export default Game;
