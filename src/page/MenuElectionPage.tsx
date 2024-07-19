import { useLocation } from "react-router-dom";
import ElectionMenu from "../components/ElectionMenu";
import ListProductClient from "../components/ListProductClient";
import ProductMenu from "../components/ProductMenu";
import style from "../styles/MenuElectionPage.module.scss";
import ListProductBreakfast from "../components/ListProductBreakfast";
import { useState } from "react";
import ListElectionLunch from "../components/ListElectionLunch";

const MenuElectionPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tableNumber = queryParams.get("tableNumber") ?? undefined;

  const [menu, setMenu] = useState<"breakfast" | "lunch" | "none">("none");


 const changeMenu = (menu: "breakfast" | "lunch" | "none") => {
setMenu(menu)
 }

  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu onMenuChange={changeMenu} />
          {menu === "breakfast" ? (
            <ListProductBreakfast />
          ) : menu === "lunch" ? (
            <ListElectionLunch />
            ) : (
              <ProductMenu />
            )}

        </div>
        <div>
          <ListProductClient tableNumber={tableNumber} />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
