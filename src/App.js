
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/login";
import Licence from "./pages/licence";
import Master from "./pages/master";
import AdminDachboard from "./pages/adminDachboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Licence" element={<Licence />} />
        <Route path="/Master" element={<Master />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDachboard" element={<AdminDachboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
