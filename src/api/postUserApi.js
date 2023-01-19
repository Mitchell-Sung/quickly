const postUserApi = async (user, url) => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export default postUserApi;
