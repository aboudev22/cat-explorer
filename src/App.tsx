import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Favorite from "./pages/Favorite";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}
