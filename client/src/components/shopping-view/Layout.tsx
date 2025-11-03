import { Outlet } from 'react-router-dom';
import ShoppingHeader from './Header';

const ShoppingLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ShoppingLayout;
