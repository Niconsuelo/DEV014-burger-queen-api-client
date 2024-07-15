import "../styles/NavBar.scss";

const NavBar: React.FC = () => {
  return (
    <div className="containerNav">
     
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
  );
};

export default NavBar;
