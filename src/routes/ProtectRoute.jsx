import { ROUTE_LOGIN } from 'constants';
import getToken from 'libs/getToken';
import { element } from 'prop-types';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      setToken(token);
    })();
  }, []);

  if (token === null) {
    return <Navigate to={ROUTE_LOGIN} replace={true} />;
  } else {
    return children;
  }
};

ProtectedRoute.propTypes = {
  children: element,
};

export default ProtectedRoute;
