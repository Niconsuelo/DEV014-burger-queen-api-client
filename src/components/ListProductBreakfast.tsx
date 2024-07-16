import style from "../styles/ListProductBreakfast.module.scss";

const ListProductBreakfast: React.FC = () => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>CAFÉ AMERICANO</h2>
            <p className={style.textPrice}>$5</p>
            </div>
          </div>

          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>
              SANDWICH DE JAMÓN QUESO
            </h2>
            <p className={style.textPrice}>$7</p>
            </div>
          </div>
        </section>

        <section className={style.sectionRight}>
          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>CAFÉ CON LECHE</h2>
            <p className={style.textPrice}>$7</p>
            </div>
          </div>

          <div className={style.electionProduct}>
          <div className={style.containerText}>
            <h2 className={style.textElectionProduct}>
              JUGO DE FRUTAS NATURAL
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
export default ListProductBreakfast;
