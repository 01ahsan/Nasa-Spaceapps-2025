import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Researchers from "./pages/Researchers";
import Beginners from "./pages/Beginners";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/researchers" element={<Researchers />} />
      <Route path="/beginners" element={<Beginners />} />
    </Routes>
  );
}
