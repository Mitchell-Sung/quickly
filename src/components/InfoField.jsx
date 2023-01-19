import TextField from '@mui/material/TextField';

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

export default InfoField;
