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
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  } else {
    return data;
  }
};

export default getUserApi;
