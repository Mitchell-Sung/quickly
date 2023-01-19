import Button from '@mui/material/Button';

const TextButton = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default TextButton;
