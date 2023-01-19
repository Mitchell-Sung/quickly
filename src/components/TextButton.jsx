import Button from '@mui/material/Button';
import { string, func } from 'prop-types';

const TextButton = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

TextButton.propTypes = {
  label: string,
  onClick: func,
};

export default TextButton;
