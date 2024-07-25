import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/UnitProductDetails.module.scss";
import {
  faCircleMinus,
  faPenToSquare,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

interface UnitProductDetailsProps {
  product: string;
  quantity: number;
  onAdd: (product: string) => void;
}

const UnitProductDetails: React.FC<UnitProductDetailsProps> = ({
  product,
  quantity,
  onAdd
}) => {
  const deleteButton = () => {
    console.log("producto eliminado");
  };

  const addButton = () => {
    onAdd(product)
    console.log("producto añadido");
  };

  const editButton = () => {
    console.log("producto modificado");
  };
  return (
    <>
      <div className={style.detailsProductClient}>
        <section
          className={`${style.textOptionClient} ${style.textContainerListClient}`}
        >
          <div className={style.productContainer}>
            <p className={style.textDetailsClient}>{quantity}</p>

            <p className={style.textDetailsClientProduct}>{product}</p>
            <div className={style.containerIcon}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className={style.icon}
                onClick={addButton}
                title="Añadir"
              />
              <FontAwesomeIcon
                icon={faCircleMinus}
                className={style.iconDelete}
                onClick={deleteButton}
                title="Eliminar"
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={style.iconNote}
                onClick={editButton}
                title="Modificar"
              />
            </div>
            <div className={style.textDetailsClientPrice}>$ VALOR</div>
          </div>
        </section>
      </div>
    </>
  );
};
export default UnitProductDetails;
