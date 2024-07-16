import "../styles/NavBar.scss";
import ButtonAccess from "./ButtonAccess";
import "../styles/ButtonAccess.scss";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="bannerButton">
        <p className="textWelcome"> ¡ BIENVENIDO !</p>
        <ButtonAccess buttonText="SALIR" className="buttonExit" />
      </div>

      <div className="containerNav">
        <div className="bannerUser"></div>

        <div className="optionNav">
          <p className="textOption">TOMAR PEDIDO</p>
        </div>

        <div className="optionNav">
          <p className="textOption"> VER PEDIDO</p>
        </div>

        <div className="optionNav">
          <p className="textOption">HISTORIAL</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
