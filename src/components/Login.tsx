import "../styles/Login.scss";
import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";
import '../styles/InputText.scss';

const Login: React.FC = () => {
  return (
    <div className="containerLogin">
      <div className="textColor imgLogin"></div>

      <div>
        <div className="textColor loginText"> INICIAR SESIÓN</div>
        <div className="loginLine"></div>
        <p className="textLogin">INGRESE CORREO ELÉCTRONICO</p>
        <InputText/>
        <p className="textLogin">INGRESE CONTRASEÑA</p>
        <InputText/>
       <ButtonAccess buttonText="ACCEDER" className="buttonLogin"/>
      </div>
    </div>
  );
};

export default Login;
