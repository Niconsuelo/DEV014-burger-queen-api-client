import "../styles/Logo.scss";
import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";

const OrderTable: React.FC = () => {
  return (
    <div className="containerOrder">
        <div className="container-input-order">
            <p className="orderTitle">INGRESAR Nº MESA</p>
            <InputText/>
            <ButtonAccess buttonText="INGRESAR" className="buttonLogin" />
        </div>
    </div>
  );
};

export default OrderTable;