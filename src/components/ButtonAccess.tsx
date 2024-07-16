import '../styles/ButtonAccess.scss'

interface ButtonAccessProps {
  buttonText: string;
  className: string;
}

const ButtonAccess: React.FC<ButtonAccessProps> = ({ buttonText, className }) => {
  return (
    <div>
      <button type="submit" className={className}>
      {buttonText}
      </button>
    </div>
  );
};
export default ButtonAccess;
