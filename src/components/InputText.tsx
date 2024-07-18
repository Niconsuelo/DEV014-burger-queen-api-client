import style from '../styles/InputText.module.scss'

interface InputTextProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ type, id, value, onChange }) => {
  return (
    <div>
      <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={style.inputLogin}
        />
    </div>
  );
};
export default InputText;
