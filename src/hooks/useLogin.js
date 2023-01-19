import { useEffect, useState } from 'react';
import { initLogin, initValid } from 'data/loginData';
import checkSubmit from 'libs/checkSubmit';
import postUserApi from 'api/postUserApi';
import { API_LOGIN, ROUTE_MY_PROFILE } from 'constants';
import validateUser from 'libs/validateUser';
import storeToken from 'libs/setToken';
import { useNavigate } from 'react-router-dom';
import { ROUTE_SIGNUP } from 'constants';

const useLogin = () => {
  const navigate = useNavigate();

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
    const res = await postUserApi(login, API_LOGIN);
    if (res.success) {
      storeToken(res.token);
      return navigate(ROUTE_MY_PROFILE);
    }
    setLoading(false);
  };

  const onReset = () => {
    setLogin(initLogin);
    setValid(initValid);
  };

  const onLink = () => {
    return navigate(ROUTE_SIGNUP);
  };

  useEffect(() => {
    const _canSubmit = checkSubmit(valid);
    setCanLogin(_canSubmit);
  }, [valid]);

  return {
    canLogin,
    login,
    valid,
    onHandle,
    onSubmit,
    onReset,
    loading,
    onLink,
  };
};

export default useLogin;
