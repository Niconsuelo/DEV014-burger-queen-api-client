import { useLocation, useNavigate } from "react-router-dom";
import ElectionMenu from "../components/ElectionMenu";
import ListProductClient from "../components/ListProductClient";
import ProductMenu from "../components/ProductMenu";
import style from "../styles/MenuElectionPage.module.scss";
import ListProductBreakfast from "../components/ListProductBreakfast";
import { useEffect, useState } from "react";
import ListElectionLunch from "../components/ListElectionLunch";
import Product from "../models/Product";
import SelectedProduct from "../models/SelectedProduct";

const mockProduct: Product[] = [
  {
    id: 1,
    name: "Café americano",
    price: 5,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "breakfast",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 2,
    name: "Café con leche",
    price: 7,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "breakfast",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 3,
    name: "Sandwich de jamón y queso",
    price: 10,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "breakfast",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 4,
    name: "Jugo de frutas natural",
    price: 10,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "breakfast",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 5,
    name: "Hamburguesa simple",
    price: 10,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "",
    dateEntry: "2022-03-05 15:14:10",
  },
];

const MenuElectionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const tableNumber = queryParams.get("tableNumber") ?? undefined;
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  //useNavigate permite cambiaar la url programaticamente.

  const initialMenu =
    (queryParams.get("menu") as "breakfast" | "lunch" | "none") || "none";
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

  //selected son productos seleccionados, product va agregando a esa copia

  //destructuring obtengo todos elementos del arreglo
  //rompe arreglo para crear un e¡objeto en otro espacio de memoria

  //comprueba si el rpoducto existe en la lista de producto seleccionado
  const addProduct = (product: string) => {
    setSelectedProducts((ExistProducts) => {
      //si existe un producto en arreglo ExistProducts
      //enceuntra el primer producto en ExistProducts que tenga el mismo nombre que el producto seleccionado.
      const existingProduct = ExistProducts.find((e) => e.name === product);
      //si el producto existe en la lista
      if (existingProduct) {
        //actualiza nº
        return ExistProducts.map((e) =>
          //si producto coincide con el producto seleccionado
          //crea nuevo objeto, copia de e pero con quatity +1
          //si no encuentra coincidencia, e queda sin cambios
          e.name === product ? { ...e, quantity: e.quantity + 1 } : e
        );
      } else {
        //si no existe producto, añade el producto con cantidad inicial 1
        //queda un array con productos anteriores mas el objeto con 1
        return [...ExistProducts, { name: product, quantity: 1 }];
      }
    });
  };

  const breakfastProduct = mockProduct.filter(
    (product) => product.type === "breakfast"
  );
  //console.log(breakfastProduct, 'aqui usamos filter')

  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu onMenuChange={changeMenu} />
          {menu === "breakfast" ? (
            <ListProductBreakfast
              products={breakfastProduct}
              addProduct={addProduct}
            />
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
            addProduct={addProduct}
          />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
