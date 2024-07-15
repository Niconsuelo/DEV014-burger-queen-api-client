import ButtonAccess from "./ButtonAccess";
import "../styles/Logo.scss";

const Logo: React.FC = () => {
  return (
    <div className="containerLogo">
      <div className="logoImg">
        <div className="marginButton">
        <ButtonAccess />
        </div>
      </div>
    </div>
  );
};

export default Logo;
