const validateName = (value) => {
  let result = { err: false, msg: '', canSubmit: true };

  if (value.length === 0) {
    return (result = {
      err: true,
      msg: 'Must be filled up',
      canSubmit: false,
    });
  } else {
    return result;
  }
};

export default validateName;
