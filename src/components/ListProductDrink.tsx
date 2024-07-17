import style from "../styles/ListProductDrink.module.scss";

const ListProductDrink: React.FC = () => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>AGUA 500 ML</h2>
            <p className={style.textPrice}>$5</p>
            </div>
          </div>

          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>
              AGUA 750 ML
            </h2>
            <p className={style.textPrice}>$7</p>
            </div>
          </div>
        </section>

        <section className={style.sectionRight}>
          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>GASEOSAS</h2>
            <p className={style.textPrice}>$7</p>
            </div>
          </div>

          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>
              GASEOSA 750 ML
            </h2>
            <p className={style.textPrice}>$10</p>
            </div>
          </div>
        </section>

        <div className={style.containerProductBreakfast}></div>
      </div>
    </>
  );
};
export default ListProductDrink;
