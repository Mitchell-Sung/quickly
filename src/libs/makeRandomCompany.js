const makeRandomCompany = () => {
  const company = Math.random().toString(36).substring(2, 8);
  return company;
};

export default makeRandomCompany;
