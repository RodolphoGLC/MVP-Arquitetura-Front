
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamBuilder from "./pages/TeamBuilder";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<TeamBuilder />} />
      <Route path="/builder/:id" element={<TeamBuilder />} />
    </Routes>
  </BrowserRouter>
);
