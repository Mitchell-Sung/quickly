import { API_GET_USER } from 'constants';

const getUserApi = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer ' + token,
    },
  };

  const res = await fetch(API_GET_USER, options);

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw Error(res.statusText);
  }
};

export default getUserApi;
