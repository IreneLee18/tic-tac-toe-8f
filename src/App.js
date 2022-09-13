import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Winner from "./Pages/Winner";
import WinnerId from "./Pages/Components/WinnerId";
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="game" element={<Game/>}/>
      <Route path="winner" element={<Winner/>}>
        <Route path="id" element={<WinnerId/>}/>
      </Route>
    </Routes>
    </>
  );
}
export default App;
