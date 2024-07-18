import style from "../styles/ViewHistory.module.scss";


const ViewHistory: React.FC = () => {
    return (
      <div className={style.containerViewHistory}>
        <div className={style.historyDetail}>
        <section className={style.bannerHistory}>
        <p className={style.textBannerHistory}>FECHA</p>
            <p className={style.textBannerHistory}>Nº DE ORDEN</p>
            <p className={style.textBannerHistory}>NOMBRE COLABORADOR</p>
            <p className={style.textBannerHistory}>REVISAR PEDIDO</p>
        </section>
        </div>
      </div>
    );
  };
  
  export default ViewHistory;