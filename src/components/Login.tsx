import style from "../styles/Login.module.scss";
import ButtonAccess from "./ButtonAccess";
import InputText from "./InputText";
import "../styles/ButtonAccess.scss";

interface LoginProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  onSubmit?: () => void;
}

const Login: React.FC<LoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,

  onSubmit,
}) => {
  //actualizan el estado correspondiente en tu componente cada vez que el usuario modifica el valor de los campos
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.containerLogin}>
      <div className={`${style.textColor} ${style.imgLogin}`}></div>

      <div>
        <div className={`${style.textColor} ${style.loginText}`}>
          INICIAR SESIÓN
        </div>
        <div className={style.loginLine}></div>
        <p className={style.textLogin}>INGRESE CORREO ELÉCTRONICO</p>
        <InputText
          type="email"
          id="email"
          value={email}
          onChange={emailChange}
        />
        <p className={style.textLogin}>INGRESE CONTRASEÑA</p>
        <InputText
          type="password"
          id="password"
          value={password}
          onChange={passwordChange}
        />

        {/* Muestra el error */}
        <ButtonAccess
          buttonText="ACCEDER"
          className="buttonLogin"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
