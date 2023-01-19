import getUserApi from 'api/getUserApi';
import { ROUTE_LOGIN } from 'constants';
import getToken from 'libs/getToken';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useMyProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const token = await getToken();
        if (token !== null) {
          const { user } = await getUserApi(token);
          setUser(user);
        } else {
          return navigate(ROUTE_LOGIN);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  return { loading, user };
};

export default useMyProfile;
