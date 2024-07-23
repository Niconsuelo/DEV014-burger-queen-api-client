import {  useNavigate } from "react-router-dom";
import TotalTable from "../components/TotalTable";
import { useEffect } from "react";

const ViewOrderPage: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Crear un nuevo objeto URLSearchParams para limpiar los parámetros
    const queryParams = new URLSearchParams();

    // Navegar a la misma página con parámetros limpios
    navigate({
      search: queryParams.toString(),
    });
  }, [navigate]);

  return (
    <>
      <div>
        <TotalTable />
      </div>
    </>
  );
};
export default ViewOrderPage;
