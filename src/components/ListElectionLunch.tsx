import style from "../styles/ListElectionLunch.module.scss";

const ListElectionLunch: React.FC = () => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>HAMBURGUESAS</h2>
            </div>
          </div>

          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>ACOMPAÑAMIENTOS</h2>
            </div>
          </div>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
              <h2 className={style.textElectionProduct}>BEBESTIBLES</h2>
            </div>
          </div>
        </section>

        <div className={style.containerProductBreakfast}></div>
      </div>
    </>
  );
};
export default ListElectionLunch;
