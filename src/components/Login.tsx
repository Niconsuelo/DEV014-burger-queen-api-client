import style from "../styles/Login.module.scss";
import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";
import "../styles/ButtonAccess.scss";

const Login: React.FC = () => {
  return (
    <div className={style.containerLogin}>
      <div className={`${style.textColor} ${style.imgLogin}`}></div>
    
      <div>
        <div className={`${style.textColor} ${style.loginText}`}> INICIAR SESIÓN</div>
        <div className={style.loginLine}></div>
        <p className={style.textLogin}>INGRESE CORREO ELÉCTRONICO</p>
        <InputText/>
        <p className={style.textLogin}>INGRESE CONTRASEÑA</p>
        <InputText/>
       <ButtonAccess buttonText="ACCEDER" className="buttonLogin"/>
      </div>
    </div>
  );
};

export default Login;
