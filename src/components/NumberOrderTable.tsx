import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";
import style from "../styles/NumberOrderTable.module.scss";
import "../styles/ButtonAccess.scss";


interface NumberOrderTableProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const NumberOrderTable: React.FC<NumberOrderTableProps> = ({ inputValue, onInputChange, onButtonClick }) => {
 
  
  return (
    <div className={style.containerOrder}>
      <div className={style.containerInputOrder}>
        <p className={style.orderTitle}>INGRESA Nº MESA</p>
        <InputText type="text" id="text" value={inputValue} onChange={onInputChange} />
        <ButtonAccess buttonText="INGRESAR" className="buttonLogin" onClick={onButtonClick}/>

      </div>
    </div>
  );
};

export default NumberOrderTable;
