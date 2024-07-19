import { useState } from "react";
import style from "../styles/InputText.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputTextProps {
  type: string;
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}



const InputText: React.FC<InputTextProps> = ({ type, id, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toVisiblePasword = () => {
    setShowPassword( prev => !prev);
  };



  return (
    <div className={style.inputWrapper}>
      <input
        type={showPassword ? 'text': type}
        id={id}
        value={value}
        onChange={onChange}
        className={style.inputLogin}

        
      />
 {type === 'password' && (
        <button
          type="button"
          className={style.toggleButton}
          onClick={toVisiblePasword}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      )}

    </div>
  );
};
export default InputText;
