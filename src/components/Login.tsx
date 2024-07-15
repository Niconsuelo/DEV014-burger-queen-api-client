import "../styles/Login.scss";
import ButtonAccess from "./ButtonAccess";

const Login: React.FC = () => {
  return (
    <div className="containerLogin">
      <div className="textColor imgLogin"></div>

      <div>
        <div className="textColor loginText"> INICIAR SESIÓN</div>
        <div className="loginLine"></div>
        <p>INGRESE CORREO ELÉCTRONICO</p>
        <input
          type="text"
          placeholder="Correo electrónico"
          className="inputLogin"
        />
        <p>INGRESE CONTRASEÑA</p>
        <input
          type="text"
          placeholder="Correo electrónico"
          className="inputLogin"
        />
       <ButtonAccess/>
      </div>
    </div>
  );
};

export default Login;
