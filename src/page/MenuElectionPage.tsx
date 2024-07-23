import { useLocation, useNavigate } from "react-router-dom";
import ElectionMenu from "../components/ElectionMenu";
import ListProductClient from "../components/ListProductClient";
import ProductMenu from "../components/ProductMenu";
import style from "../styles/MenuElectionPage.module.scss";
import ListProductBreakfast from "../components/ListProductBreakfast";
import { useEffect, useState } from "react";
import ListElectionLunch from "../components/ListElectionLunch";

const MenuElectionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const tableNumber = queryParams.get("tableNumber") ?? undefined;
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  //useNavigate permite cambiaar la url programaticamente.

  const initialMenu = (queryParams.get("menu") as "breakfast" | "lunch" | "none") || "none";
  const [menu, setMenu] = useState<"breakfast" | "lunch" | "none">(initialMenu);

  const changeMenu = (menu: "breakfast" | "lunch" | "none") => {
    setMenu(menu);
    //elimina parametro menu (breakfast,lunch)
    queryParams.delete("menu");
    //reestablece parametros si es diferente a none
    if (menu !== "none") {
      queryParams.set("menu", menu);
    }
    //set: establece valor del parametro menu con el valor del estado menu

    navigate({
      search: queryParams.toString(),
    });
  };
  //actualiza el estado cuando los parámetros de consulta cambian.
  useEffect(() => {
    // Actualiza el estado si el parámetro de consulta cambia
    const updatedMenu = queryParams.get("menu") || "none";
    setMenu(updatedMenu as "breakfast" | "lunch" | "none");
  }, [location.search]);

  const addProduct = (product: string) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu onMenuChange={changeMenu} />
          {menu === "breakfast" ? (
            <ListProductBreakfast addProduct={addProduct} />
          ) : menu === "lunch" ? (
            <ListElectionLunch />
          ) : (
            <ProductMenu />
          )}
        </div>
        <div>
          <ListProductClient
            products={selectedProducts}
            tableNumber={tableNumber}
          />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
