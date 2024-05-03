import { BrowserRouter, Routes, Route, Links } from "react-router-dom";
import Ubwitabire from "./Ubwitabire";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ubwitabire />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
