import TextField from '@mui/material/TextField';

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

export default InputField;
