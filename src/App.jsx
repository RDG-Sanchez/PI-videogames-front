// Import Style
import "./App.css";

// Import Views & Components
import {
  ViewLanding,
  ViewHome,
  ViewDetail,
  ViewCreate,
  ViewAbout,
  ViewNotFound,
} from "./views/views";
import { NavBar } from "./components/components";

// Import Librarys & Hooks
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="app">
      {pathname === "/" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<ViewLanding />} />
        <Route path="/home" element={<ViewHome />} />
        <Route path="/detail/:id" element={<ViewDetail />} />
        <Route path="/create" element={<ViewCreate />} />
        <Route path="/about" element={<ViewAbout />} />
        <Route path="*" element={<ViewNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
