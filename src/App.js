import Home from "./Components/Home";
import Game from "./Components/Game";
import Winner from "./Components/Winner";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="game" element={<Game/>}></Route>
      <Route path="winner" element={<Winner/>}></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
    </>
  );
}
export default App;
