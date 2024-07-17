import style from "../styles/ListProductBurger.module.scss";

const ListProductBurger: React.FC = () => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>HAMBURGUESA SIMPLE</h2>
              <p className={style.textPrice}>$10</p>
            </div>
          </div>
        </section>

        <section className={style.sectionRight}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>HAMBUERGUESA DOBLE</h2>
              <p className={style.textPrice}>$15</p>
            </div>
          </div>
        </section>

        <div className={style.containerProductBreakfast}></div>
      </div>
    </>
  );
};
export default ListProductBurger;
