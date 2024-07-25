import SelectedProduct from "../models/SelectedProduct";
import style from "../styles/ListProductClient.module.scss";
import BannerListProductClient from "./BannerListProductClient";
import BannerNumberClient from "./BannerNumberClient";
import ButtonAccess from "./ButtonAccess";
import UnitProductDetails from "./UnitProductDetails";

interface ListProducClientProps {
  tableNumber?: string | null;
  products: SelectedProduct[];
  addProduct: (product: string) => void;
}

const ListProducClient: React.FC<ListProducClientProps> = ({
  tableNumber,
  products,
  addProduct,
}) => {
  return (
    <>
      <div className={style.containerListClient}>
        <BannerNumberClient
          tableNumber={tableNumber ?? "No hay número de mesa"}
        />
        <div className={style.nameProductClient}>
          <BannerListProductClient />
        </div>

        <div className={style.scrollProductClient}>
          {products.map((product, index) => (
            <UnitProductDetails
              key={index}
              product={product.name}
              quantity={product.quantity}
              onAdd={addProduct}
            />
          ))}
        </div>

        <div className={style.totalPriceClient}>
          <section className={style.textTotalPrice}>
            <p className={style.textContainerListClient}>TOTAL:</p>
            <p className={style.textContainerListClient}>$00.0000</p>
          </section>
        </div>
        <div className={style.buttonSendProduct}>
          <p className={style.textContainerListClient}> </p>
          <ButtonAccess
            buttonText="ENVIAR A COCINA"
            className="buttonSendOrder"
          />
        </div>
      </div>
    </>
  );
};
export default ListProducClient;
