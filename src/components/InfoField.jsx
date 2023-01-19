import TextField from '@mui/material/TextField';
import { string } from 'prop-types';

const InfoField = ({ label, value }) => {
  return (
    <TextField
      variant='standard'
      InputLabelProps={{ shrink: true }}
      type='text'
      label={label}
      value={value}
      InputProps={{ readOnly: true }}
      sx={{ width: '17.5rem' }}
    />
  );
};

InfoField.propTypes = {
  label: string,
  value: string,
};

export default InfoField;
