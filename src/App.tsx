import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/room?/:access_key" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
