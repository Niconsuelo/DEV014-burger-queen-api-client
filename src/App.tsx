import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import InputTablePage from "./page/InputTablePage";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/OrderPage" element={<InputTablePage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
