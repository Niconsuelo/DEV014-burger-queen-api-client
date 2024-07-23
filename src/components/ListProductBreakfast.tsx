import style from "../styles/ListProductBreakfast.module.scss";

interface ListProductBreakfastProps {
  addProduct: (product: string) => void;
}

const ListProductBreakfast: React.FC<ListProductBreakfastProps> = ({
  addProduct,
}) => {
  return (
    <>
      <div className={style.containerListProductBreakfast}>
        <section className={style.sectionLeft}>
          <div className={style.electionProduct}>
            <button
              className={style.buttonProduct}
              onClick={() => addProduct("CAFÉ AMERICANO")}
            >
              <div className={style.containerText}>
                <h2 className={style.textElectionProduct}>CAFÉ AMERICANO</h2>
                <p className={style.textPrice}>$5</p>
              </div>
            </button>
          </div>

          <div className={style.electionProduct}>
            <button
              className={style.buttonProduct}
              onClick={() => addProduct("SANDWICH JAMÓN QUESO")}
            >
              <div className={style.containerText}>
                <h2 className={style.textElectionProduct}>
                  SANDWICH JAMÓN QUESO
                </h2>
                <p className={style.textPrice}>$7</p>
              </div>
            </button>
          </div>
        </section>

        <section className={style.sectionRight}>
          <div className={style.electionProduct}>
            <button
              className={style.buttonProduct}
              onClick={() => addProduct("CAFÉ CON LECHE")}
            >
              <div className={style.containerText}>
                <h2 className={style.textElectionProduct}>CAFÉ CON LECHE</h2>
                <p className={style.textPrice}>$7</p>
              </div>
            </button>
          </div>

          <div className={style.electionProduct}>
            <button
              className={style.buttonProduct}
              onClick={() => addProduct("JUGO DE FRUTA NATURAL")}
            >
              <div className={style.containerText}>
                <h2 className={style.textElectionProduct}>
                  JUGO DE FRUTA NATURAL{" "}
                </h2>
                <p className={style.textPrice}>$10</p>
              </div>
            </button>
          </div>
        </section>

        <div className={style.containerProductBreakfast}></div>
      </div>
    </>
  );
};
export default ListProductBreakfast;
