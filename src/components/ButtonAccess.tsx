import '../styles/ButtonAccess.scss'

interface ButtonAccessProps {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode; 
}

const ButtonAccess: React.FC<ButtonAccessProps> = ({ buttonText, className, onClick }) => {
  return (
    <div>
      <button type="submit" className={className} onClick={onClick}>
      {buttonText}
      </button>
    </div>
  );
};
export default ButtonAccess;
