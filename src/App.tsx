import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import TablePage from "./page/TablePage";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/table-order" element={<TablePage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
