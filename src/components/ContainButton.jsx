import Button from '@mui/material/Button';
import { bool, string, func } from 'prop-types';

const ContainButton = ({ label, disabled, onClick }) => {
  return (
    <Button fullWidth variant='contained' disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

ContainButton.propTypes = {
  label: string,
  disabled: bool,
  onClick: func,
};

export default ContainButton;
