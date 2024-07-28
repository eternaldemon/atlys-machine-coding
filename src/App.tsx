import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import NotFound from "./views/not-found/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
