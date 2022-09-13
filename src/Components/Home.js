import { Link,useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();

  return (
    <div style={{background:'#000000',height:"100vh"}}>
      <div className="container home">
        <ul>
          <li>TIC</li>
          <li><div className="noughts-solid"></div></li>
          <li><div className="crosses-border"><div></div></div></li>
          <li><div className="crosses-solid"></div></li>
          <li>TAC</li>
          <li><div className="noughts-border"></div></li>
          <li><div className="noughts-border"></div></li>
          <li><div className="crosses-solid"></div></li>
          <li>TOE</li>
        </ul>
        <button onClick={()=>{navigate("game")}}>
          <Link to="game">START</Link>
        </button>
      </div>
    </div>
  );
}
export default Home;
