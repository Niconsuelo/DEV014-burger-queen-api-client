import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";
import style from "../styles/NumberOrderTable.module.scss";
import "../styles/ButtonAccess.scss";

const NumberOrderTable: React.FC = () => {
  return (
    <div className={style.containerOrder}>
        <div className={style.containerInputOrder}>
            <p className={style.orderTitle}>INGRESAR Nº MESA</p>
            <InputText/>
            <ButtonAccess buttonText="INGRESAR" className="buttonLogin" />
        </div>
    </div>
  );
};

export default NumberOrderTable;