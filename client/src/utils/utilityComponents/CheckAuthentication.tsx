import { Navigate, useLocation } from 'react-router-dom';
import type { CheckAuthenticationProps } from '../../types';

const CheckAuthentication = ({
  isAuthenticated,
  userDetails,
  children,
}: CheckAuthenticationProps) => {
  const location = useLocation();

  if (!isAuthenticated && !location.pathname.includes('/auth')) {
    return <Navigate to="/auth" />;
  }

  if (isAuthenticated && location.pathname.includes('/auth')) {
    return userDetails.role === 'admin' ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/rental/home" />
    );
  }

  if (isAuthenticated && userDetails.role !== 'admin' && location.pathname.includes('admin')) {
    return <Navigate to="/unauthorized" />;
  }

  if (isAuthenticated && userDetails.role === 'admin' && location.pathname.includes('rental')) {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
};

export default CheckAuthentication;
