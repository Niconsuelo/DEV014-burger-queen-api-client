import { useState } from "react";
import Login from "../components/Login";
import ModalLogin from "../components/ModalLogin";
import ValidationEmail from "../models/ValidationEmail";
import { useNavigate } from "react-router-dom";
import { login } from "../services/APIService";

const validateEmail = ({ email }: ValidationEmail): boolean => {
  // La dirección debe contener exactamente una '@' y separa
  const emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }
  const [userPart, domainPart] = emailParts;

  //debe estar ambas partes
  if (!userPart || !domainPart) {
    return false;
  }
  //@example.com debe tener un punto para separar
  const domainParts = domainPart.split(".");
  //si tiene menos de dos partes, es falso
  if (domainParts.length < 2) {
    return false;
  }
  //recorre domainParts , verifica que ninguna parte del dominio esta vacia
  for (const part of domainParts) {
    if (!part) {
      return false;
    }
  }

  return true;
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigateTo = useNavigate();

    //lee la solicitud y no se detiene para completar
  const sesionLogin = async () => {
    if (email === "" && password === "") {
      console.log("error de datos");
      setError(
        "Ingrese su correo eléctronico y contraseña para iniciar sesión"
      );
      setIsModalVisible(true);
      return;
    }

    if (email === "") {
      setError("Ingrese su correo eléctronico");
      setIsModalVisible(true);
      return;
    }
    if (password === "") {
      setError("Ingrese su contraseña");
      setIsModalVisible(true);
      return;
    }
    if (!validateEmail({ email })) {
      setError("Ingrese un correo eléctronico válido");
      setIsModalVisible(true);
      return;
    }

    try {
      //espera a que apiService complete la solicitud de autenticación y devuelva el token.
      const token = await login(email, password); // Llamar a la función de autenticación y obtener el token
      //almacena el token en el navegador
      //token disponible para futuras solicitudes
      localStorage.setItem("token", token); // Almacenar el token en localStorage
      setError("");
      setIsModalVisible(false);
      navigateTo("/table-order");
      //si la api devuelve un error
    } catch (err) {
      setError("Error en la autenticación");
      setIsModalVisible(true);
    }
  };

  /*
  setError('');
  setIsModalVisible(false)
  */

  const clickCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        setError={setError}
        onSubmit={sesionLogin}
      />
      {isModalVisible && (
        <ModalLogin message={error} onClose={clickCloseModal} />
      )}
    </div>
  );
};
export default LoginPage;
