import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const PrivateRoute = () => {
  const { token } = useAuthStore();
  
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
