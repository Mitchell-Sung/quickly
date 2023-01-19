const createUserApi = async (method, user, url, jwtStr) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + jwtStr,
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(url, options);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  } else {
    return data;
  }
};

export default createUserApi;
