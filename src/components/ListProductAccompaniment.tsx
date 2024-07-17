import style from "../styles/ListProductAccompaniment.module.scss";

const ListProductAccompaniment: React.FC = () => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>PAPAS FRITAS</h2>
              <p className={style.textPrice}>$5</p>
            </div>
          </div>
        </section>

        <section className={style.sectionRight}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>AROS DE CEBOLLA</h2>
              <p className={style.textPrice}>$5</p>
            </div>
          </div>
        </section>

        <div className={style.containerProductBreakfast}></div>
      </div>
    </>
  );
};
export default ListProductAccompaniment;
