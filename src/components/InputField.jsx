import TextField from '@mui/material/TextField';
import { bool, string, func } from 'prop-types';

const InputField = ({ name, type, label, value, err, msg, onChange }) => {
  return (
    <TextField
      variant='outlined'
      InputLabelProps={{ shrink: true }}
      name={name}
      type={type}
      label={label}
      value={value}
      error={err}
      helperText={msg}
      onChange={onChange}
      sx={{ width: '17.5rem' }}
    />
  );
};

InputField.propTypes = {
  name: string,
  type: string,
  label: string,
  value: string,
  err: bool,
  msg: string,
  onChange: func,
};

export default InputField;
