import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Winner from "./Pages/Winner";
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="game" element={<Game/>}/>
      <Route path="winner" element={<Winner/>}/>
    </Routes>
    </>
  );
}
export default App;
