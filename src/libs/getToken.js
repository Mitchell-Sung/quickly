const getToken = async () => {
  const token = await JSON.parse(localStorage.getItem('jwtStr'));
  return token;
};

export default getToken;
