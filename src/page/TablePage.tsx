import { useNavigate } from "react-router-dom";
import NumberOrderTable from "../components/NumberOrderTable";
import { useState } from "react";
import ModalLogin from '../components/ModalLogin';


const TablePage: React.FC= () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigateTo = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      setModalMessage("Por favor ingresa Nº de Mesa");
      setIsModalOpen(true);
      console.log('aqui')
      return;
    }

    console.log("numero ingresado", inputValue);
    navigateTo(`/order-product?tableNumber=${inputValue}`);
  };
const closeModalOrderTable = () => {
  setIsModalOpen(false);
}

  return (
    <div>
      <NumberOrderTable
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
      />
      {isModalOpen &&  <ModalLogin message={modalMessage} onClose={closeModalOrderTable} />
}
    </div>
  );
};
export default TablePage;
