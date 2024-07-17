import style from '../styles/InputText.module.scss'

const InputText: React.FC = () => {
  return (
    <div>
      <input
          type="text"
          placeholder="  "
          className={style.inputLogin}
        />
    </div>
  );
};
export default InputText;
