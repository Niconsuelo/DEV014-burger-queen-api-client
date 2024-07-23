import { useState } from "react";
import style from "../styles/ListElectionLunch.module.scss";
import ListProductBurger from "./ListProductBurger";
import ListProductDrink from "./ListProductDrink";
import ListProductAccompaniment from "./ListProductAccompaniment";
import { useLocation, useNavigate } from "react-router-dom";

const ListElectionLunch: React.FC = () => {
  //el uso de navigate es para guardar url al historial del navegador
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [electionLunch, setElectionLunch] = useState<
    "burgers" | "drinks" | "sides" | "none"
  >("none");

  const changeElectionLunch = (
    option: "burgers" | "drinks" | "sides" | "none"
  ) => {
    setElectionLunch(option);
    queryParams.set("electionLunch", option);
    navigate({
      search: queryParams.toString(),
    })
  };
  return (
    <div className={style.containerListProductBreakfast}>
      {electionLunch === "none" ? (
        <section className={style.sectionLeft}>
          <div className={style.containerText}>
            <button onClick={() => changeElectionLunch("burgers")} className={style.textElectionProduct}>
              HAMBURGUESAS
            </button>
          </div>
          <div className={style.containerText}>
            <button onClick={() => changeElectionLunch("sides")} className={style.textElectionProduct}>
              ACOMPAÑAMIENTOS
            </button>
          </div>
          <div className={style.containerText}>
            <button onClick={() => changeElectionLunch("drinks")} className={style.textElectionProduct}>
              BEBESTIBLES
            </button>
          </div>
        </section>
      ) : electionLunch === "burgers" ? (
        <ListProductBurger />
      ) : electionLunch === "sides" ? (
        <ListProductAccompaniment />
      ) : electionLunch === "drinks" ? (
        <ListProductDrink />
      ) : null}
    </div>
  );
};

export default ListElectionLunch;
