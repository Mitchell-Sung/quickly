import { useEffect, useState } from 'react';
import { initUser, initValid } from 'data/signupData';
import postUserApi from 'api/postUserApi';
import validateUser from 'libs/validateUser';
import checkSubmit from 'libs/checkSubmit';
import { ROUTE_LOGIN, ROUTE_MY_PROFILE, API_CREATE_USER } from 'constants';
import { useNavigate } from 'react-router-dom';
import storeToken from 'libs/setToken';

const useSignup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initUser);
  const [valid, setValid] = useState(initValid);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ success: true, message: '' });

  const onHandle = (e) => {
    const validated = validateUser(e.target.name, e.target.value);
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setValid((prev) => ({ ...prev, [e.target.name]: validated }));
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await postUserApi(user, API_CREATE_USER);
      if (res.success) {
        storeToken(res.token);
        return navigate(ROUTE_MY_PROFILE);
      } else {
        setError(res);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    setUser(initUser);
    setValid(initValid);
  };

  const onLink = () => {
    return navigate(ROUTE_LOGIN);
  };

  useEffect(() => {
    const _canSubmit = checkSubmit(valid);
    setCanSubmit(_canSubmit);
  }, [valid]);

  return {
    canSubmit,
    user,
    valid,
    onHandle,
    onSubmit,
    onReset,
    loading,
    onLink,
    error,
  };
};

export default useSignup;
