const validatePwd = (value) => {
  let result = { err: false, msg: '', canSubmit: true };

  if (value.length === 0) {
    return (result = { err: true, msg: 'Must be filled up', canSubmit: false });
  } else if (value.length < 6) {
    result = {
      err: true,
      msg: 'Must be minimum 6 characters',
      canSubmit: false,
    };
    return result;
  } else {
    return result;
  }
};

export default validatePwd;
