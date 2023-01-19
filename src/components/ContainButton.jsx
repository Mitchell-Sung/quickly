import Button from '@mui/material/Button';

const ContainButton = ({ label, disabled, onClick }) => {
  return (
    <Button fullWidth variant='contained' disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ContainButton;
