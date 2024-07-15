import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./page/HomePage";
import LoginPage from "./page/LoginPage";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
