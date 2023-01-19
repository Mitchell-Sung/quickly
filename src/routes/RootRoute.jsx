import { ROUTE_NOT_FOUND } from 'constants';
import { ROUTE_SIGNUP } from 'constants';
import { ROUTE_MY_PROFILE } from 'constants';
import { ROUTE_LOGIN } from 'constants';
import { Login, MyProfile, NotFound, Signup } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectRoute';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_LOGIN} element={<Login />} />
        <Route path={ROUTE_SIGNUP} element={<Signup />} />
        <Route path={ROUTE_NOT_FOUND} element={<NotFound />} />
        <Route
          path={ROUTE_MY_PROFILE}
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
