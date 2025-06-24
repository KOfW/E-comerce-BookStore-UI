import './Button.css';

type Props = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
};

const Button = ({ text, onClick, variant = 'primary' }: Props) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;