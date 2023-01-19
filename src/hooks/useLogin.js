import { useEffect, useState } from 'react';
import { initLogin, initValid } from 'data/loginData';
import checkSubmit from 'libs/checkSubmit';
import createUserApi from 'api/createUserApi';
import { POST, API_LOGIN } from 'constants';
import validateUser from 'libs/validateUser';
import storeToken from 'libs/setToken';

const useLogin = () => {
  const [login, setLogin] = useState(initLogin);
  const [valid, setValid] = useState(initValid);
  const [canLogin, setCanLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandle = (e) => {
    const validated = validateUser(e.target.name, e.target.value);
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setValid((prev) => ({ ...prev, [e.target.name]: validated }));
  };

  const onSubmit = async () => {
    setLoading(true);
    const { token } = await createUserApi(POST, login, API_LOGIN);
    storeToken(token);
    setLoading(false);
  };

  const onReset = () => {
    setLogin(initLogin);
    setValid(initValid);
  };

  useEffect(() => {
    const _canSubmit = checkSubmit(valid);
    setCanLogin(_canSubmit);
  }, [valid]);

  return { canLogin, login, valid, onHandle, onSubmit, onReset, loading };
};

export default useLogin;
