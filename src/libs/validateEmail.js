const validateEmail = (value) => {
  let result = { err: false, msg: '', canSubmit: true };

  if (value.length === 0) {
    return (result = { err: true, msg: 'Must be filled up' });
  } else if (value.length < 10 || value.length > 50) {
    result = {
      err: true,
      msg: 'Must be minimum 10 and maximum 50 characters',
      canSubmit: false,
    };
    return result;
  } else if (value.length > 10 || value.length < 100) {
    const symbolCount = (value.match(/[!$#%^&*()_+|~=`'{}[\]:";<>?,/]/g) || [])
      .length;
    const spaceCount = (value.match(/[\s]/g) || []).length;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validated = regex.test(value);

    if (symbolCount > 0) {
      result = {
        err: true,
        msg: 'Only allow dash, at sign, and dot symbols.',
        canSubmit: false,
      };
      return result;
    } else if (spaceCount > 0) {
      result = { err: true, msg: 'No space is allowed.', canSubmit: false };
      return result;
    } else if (!validated) {
      result = {
        err: true,
        msg: 'Invalid email format (ex, text@gmail.com)',
        canSubmit: false,
      };
      return result;
    } else {
      return result;
    }
  }
};

export default validateEmail;
