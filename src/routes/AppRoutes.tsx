import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Explore from "../pages/Explore";
import Favorite from "../pages/Favorite";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}
