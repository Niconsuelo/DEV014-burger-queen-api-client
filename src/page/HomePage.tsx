
import { useNavigate } from 'react-router-dom';
import ButtonAccess from '../components/ButtonAccess';
import Logo from '../components/Logo';
import style from "../styles/HomePage.module.scss";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const clickButtonLogo = () => {
    console.log('Button clicked'); // Agrega esto para depuración
    navigate("/login");
  };

  return (
   <div className={style.backgroundHome}>
    <p className={style.homeText}></p>
    <Logo/>
    < ButtonAccess  buttonText="ACCEDER"
          className="buttonLoginHome"
          onClick={clickButtonLogo}/>
  </div>
    );
};
export default HomePage;
