// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.scss";
import Home from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import TablePage from "./page/TablePage";
import MenuElectionPage from "./page/MenuElectionPage";
import NavBar from "./components/NavBar";
import PageTest from "./page/PageTest";

const App: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  //ubicación actual y permite ejecutar efectos secundarios cuando la ubicación cambia.
  const location = useLocation();

  useEffect(() => {
    // Ocultar el NavBar en la ruta de login
    if (location.pathname !== "/login" && location.pathname !== "/") {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  }, [location]);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/table-order" element={<TablePage />} />
        <Route path="/menu-election" element={<MenuElectionPage />} />
        <Route path='/page-test' element={<PageTest/>} />
      </Routes>
    </>
  );
};
// contexto de enrutamiento esté disponible para ese hook
const AppRouter: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppRouter;
