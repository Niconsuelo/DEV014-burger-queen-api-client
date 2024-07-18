import React from 'react';
import style from '../styles/ModalLogin.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
      <FontAwesomeIcon icon={faCircleExclamation} className={style.icon}/>
        <p className={style.textErrorModal}>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;