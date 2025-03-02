import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Room from "./pages/Room";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/presentations/:id" element={<Room />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
