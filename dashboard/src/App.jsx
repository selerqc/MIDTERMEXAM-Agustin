import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Viewbooks from "./pages/Viewbooks";
import AddBooks from "./pages/AddBooks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Viewbooks />} />
          <Route path="/addbooks" element={<AddBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
