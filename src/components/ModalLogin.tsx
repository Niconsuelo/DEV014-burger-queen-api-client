import React from 'react';
import style from '../styles/ModalLogin.module.scss'; // Asegúrate de tener estilos para el modal

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <p className={style.textErrorModal}>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;