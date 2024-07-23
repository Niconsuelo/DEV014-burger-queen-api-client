import style from "../styles/BannerListProductClient.module.scss";

const BannerListProductClient: React.FC = () => {
    return (
      <section
            className={`${style.textOptionClient} ${style.textContainerListClient}`}
          >
            <p className={style.textContainerListClient}>Nº</p>
            <p className={style.textDetailsClientProduct}>PRODUCTO</p>
            <p className={style.textContainerListClientEdit}>EDITAR</p>
            <p className={style.textContainerListClient}>VALOR</p>
          </section>
    );
  };
  
  export default BannerListProductClient;
  