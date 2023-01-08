import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/index";
import SinglePage from "./pages/SinglePostPage/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/:slug" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
