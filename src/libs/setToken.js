const storeToken = (token) => {
  localStorage.setItem('jwtStr', JSON.stringify(token));
};

export default storeToken;
