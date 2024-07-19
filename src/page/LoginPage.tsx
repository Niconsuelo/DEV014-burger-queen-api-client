import { useState } from "react";
import Login from "../components/Login";
import ModalLogin from "../components/ModalLogin";
import ValidationEmail from "../models/ValidationEmail";
import { useNavigate } from "react-router-dom";

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

  const sesionLogin = () => {
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
    setError('');
    setIsModalVisible(true);
    navigateTo("/table-order");
    /*
  setError('');
  setIsModalVisible(false)
  */
  };

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
