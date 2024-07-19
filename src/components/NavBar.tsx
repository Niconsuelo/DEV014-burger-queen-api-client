import style from "../styles/NavBar.module.scss";
import ButtonAccess from "./ButtonAccess";
import "../styles/ButtonAccess.scss";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigateTo = useNavigate();

  const clickButtonExit = () => {
    console.log("Button clickExit");
    navigateTo("/login");
  };

  const clickButtonBack = () => {
    navigateTo(-1); // Navega a la página anterior
  };

  return (
    <>
      <div className={style.bannerButton}>
        <div className={style.buttonBackNavBar}>
        <ButtonAccess
          buttonText="VOLVER ATRÁS"
          className={style.buttonExitNavBar}
          onClick={clickButtonBack}
        />
</div>
        <p className={style.textWelcome}> ¡ BIENVENIDO !</p>

        <ButtonAccess
          buttonText="SALIR"
          className={style.buttonExitNavBar}
          onClick={clickButtonExit}
        />
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
