import style from "../styles/ListProductClient.module.scss";
import BannerListProductClient from "./BannerListProductClient";
import ButtonAccess from "./ButtonAccess";
import UnitProductDetails from "./UnitProductDetails";

const ListProducClient: React.FC = () => {
  return (
    <>
      <div className={style.containerListClient}>
        <section className={style.numberClientContainer}>
          <p className={style.textOrderTableClient}>Nº CLIENTE:</p>
          <p className={style.textOrderTable}> MESA 01</p>
        </section>
        <div className={style.nameProductClient}>
         <BannerListProductClient/>
        </div>
        <UnitProductDetails />

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
