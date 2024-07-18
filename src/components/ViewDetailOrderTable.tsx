import style from "../styles/ViewDetailOrderTable.module.scss";
import BannerViewOrder from "./BannerViewOrder";
import ButtonAccess from "./ButtonAccess";

const ViewDetailOrderTable: React.FC = () => {
  return (
    <div className={style.containerOrder}>
      <div className={style.numberTable}>
        <p className={style.textNumberTableView}>Nº DE MESA:</p>
        <p className={style.NumberTableView}>00</p>
      </div>

      <div className={style.InputOrder}>
        <BannerViewOrder/>
        <section className={style.listOfProduct}>

        </section>
        <section className={style.viewButtonSend}>
        <div className={style.buttonSendProduct}>
          <p className={style.textContainerListClient}> </p>
          <ButtonAccess
            buttonText="CERRAR PEDIDO"
            className="buttonSendOrder"
          />
        </div>
        </section>
      </div>
    </div>
  );
};

export default ViewDetailOrderTable;
