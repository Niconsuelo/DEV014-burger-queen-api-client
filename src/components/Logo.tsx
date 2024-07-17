import ButtonAccess from "./ButtonAccess";
import style from "../styles/Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={style.containerLogo}>
      <div className={style.logoImg}>
        <div className={style.marginButton}>
        <ButtonAccess buttonText="INGRESAR" className="buttonLogin" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
