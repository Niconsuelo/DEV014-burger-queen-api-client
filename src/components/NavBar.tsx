import style from "../styles/NavBar.module.scss";
import ButtonAccess from "./ButtonAccess";
import "../styles/ButtonAccess.scss";

const NavBar: React.FC = () => {
  return (
    <>
      <div className={style.bannerButton}>
        <p className={style.textWelcome}> ¡ BIENVENIDO !</p>
        <ButtonAccess buttonText="SALIR" className="buttonExit" />
      </div>

      <div className={style.containerNav}>
        <div className={style.bannerUser}></div>

        <div className={style.optionNav}>
          <p className={style.textOption}>TOMAR PEDIDO</p>
        </div>

        <div className={style.optionNav}>
          <p className={style.textOption}> VER PEDIDO</p>
        </div>

        <div className={style.optionNav}>
          <p className={style.textOption}>HISTORIAL</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
