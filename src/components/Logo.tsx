import style from "../styles/Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={style.containerLogo}>
      <div className={style.logoImg}></div>
    </div>
  );
};

export default Logo;
