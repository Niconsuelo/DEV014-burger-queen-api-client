
import Logo from '../components/Logo';
import style from "../styles/HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
   <div className={style.backgroundHome}>
    <p className={style.homeText}></p>
    <Logo/>
  </div>
    );
};
export default HomePage;
