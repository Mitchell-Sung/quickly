import getUserApi from 'api/getUserApi';
import getToken from 'libs/getToken';
import { useState, useEffect } from 'react';

const useMyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const { user } = await getUserApi(token);
        setUser(user);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, user };
};

export default useMyProfile;
