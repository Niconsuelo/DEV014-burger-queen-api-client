import "../styles/NavBar.scss";
import ButtonAccess from "./ButtonAccess";
import '../styles/ButtonAccess.scss';

const NavBar: React.FC = () => {
  return (
    <>
    <div className="bannerButton">
    <ButtonAccess buttonText="SALIR" className="buttonExit" />
    </div>

    <div className="containerNav">
     
      <div className="bannerUser">

      </div>
     
      <div className="optionSelect">
        <p className="textSelect">TOMAR PEDIDO</p>
      </div>

      <div className="optionNav">
        <h2>VER PEDIDO</h2>
      </div>

      <div className="optionNav">
        <h2>HISTORIAL</h2>
      </div>
    </div>
    </>
  );
};

export default NavBar;
