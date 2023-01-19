const checkSubmit = (valid) => {
  const canSubmit = !Object.values(valid).some(
    ({ err, canSubmit }) => err === true || canSubmit === false
  );
  return canSubmit;
};

export default checkSubmit;
