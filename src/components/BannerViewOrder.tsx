import style from "../styles/BannerViewOrder.module.scss";

const BannerViewOrder: React.FC = () => {
  return (
    <section className={style.viewDetailOrder}>
      <p className={style.textBannerViewOrder}>PEDIDO</p>
      <p className={style.textBannerViewOrder}>ESTADO DEL PEDIDO</p>
    </section>
  );
};

export default BannerViewOrder;
