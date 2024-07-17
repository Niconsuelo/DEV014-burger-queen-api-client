import style from "../styles/ListProductClient.module.scss";
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
          <section
            className={`${style.textOptionClient} ${style.textContainerListClient}`}
          >
            <p>Nº</p>
            <p>PRODUCTO</p>
            <p>EDITAR</p>
            <p>VALOR</p>
          </section>
        </div>
        <UnitProductDetails />

        <div className={style.totalPriceClient}>
          <section className={style.textTotalPrice}>
            <p className={style.textContainerListClient}>TOTAL:</p>
            <p className={style.textContainerListClient}>$00.0000</p>
          </section>
        </div>
        <div className={style.buttonSendProduct}>
          <p className={style.textContainerListClient}>
            <ButtonAccess
              buttonText="ENVIAR A COCINA"
              className="buttonSendOrder"
            />
          </p>
        </div>
      </div>
    </>
  );
};
export default ListProducClient;
