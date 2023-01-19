import { useEffect, useState } from 'react';
import { initUser, initValid } from 'data/signupData';
import createUserApi from 'api/createUserApi';
import { POST, API_CREATE_USER } from 'constants';
import validateUser from 'libs/validateUser';
import checkSubmit from 'libs/checkSubmit';

const useSignup = () => {
  const [user, setUser] = useState(initUser);
  const [valid, setValid] = useState(initValid);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandle = (e) => {
    const validated = validateUser(e.target.name, e.target.value);
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setValid((prev) => ({ ...prev, [e.target.name]: validated }));
  };

  const onSubmit = async () => {
    setLoading(true);
    await createUserApi(POST, user, API_CREATE_USER);
    setLoading(false);
  };

  const onReset = () => {
    setUser(initUser);
    setValid(initValid);
  };

  useEffect(() => {
    const _canSubmit = checkSubmit(valid);
    setCanSubmit(_canSubmit);
  }, [valid]);

  return { canSubmit, user, valid, onHandle, onSubmit, onReset, loading };
};

export default useSignup;
