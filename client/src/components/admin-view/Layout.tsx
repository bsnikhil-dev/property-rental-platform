import { Outlet } from 'react-router-dom';
import AdminSideBar from './SideBar';
import AdminHeader from './Header';

const AdminLayout = () => {
  return (
    <div>
      <AdminSideBar />
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
