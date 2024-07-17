import style from "../styles/UnitProductDetails.module.scss";

const UnitProductDetails: React.FC = () => {
  return (
    <>
      <div className={style.detailsProductClient}>
        <section
          className={`${style.textOptionClient} ${style.textContainerListClient}`}
        >
          <p className={style.textDetailsClient}>1</p>
          <p className={style.textDetailsClient}>GASEOSA</p>
          <p className={style.textDetailsClient}>X X X</p>
          <p className={style.textDetailsClient}>$7</p>
        </section>
        <section
          className={`${style.textOptionClient} ${style.textContainerListClient}`}
        >
          <p className={style.textDetailsClient}>1</p>
          <p className={style.textDetailsClient}>GASEOSA</p>
          <p className={style.textDetailsClient}>X X X</p>
          <p className={style.textDetailsClient}>$7</p>
        </section>
      </div>
    </>
  );
};
export default UnitProductDetails;
