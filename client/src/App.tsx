import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/auth/Layout';
import LoginPage from './pages/auth/Login';
import AdminLayout from './components/admin-view/Layout';
import AdminDashboardPage from './pages/admin-view/DashBoardPage';
import AdminOrdersdPage from './pages/admin-view/OrdersPage';
import AdminProductsdPage from './pages/admin-view/ProductsPage';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/shopping-view/Home';
import CheckOutPage from './pages/shopping-view/Checkout';
import ListingPage from './pages/shopping-view/Listing';
import AccountPage from './pages/shopping-view/Account';
import CheckAuthentication from './utils/utilityComponents/CheckAuthentication';
import UnAuthorizedPage from './pages/unautorized/UnAuthorizedPage';
import { useAppSelector } from './app/hooks';
import ViewProperyPage from './pages/shopping-view/ViewProperty';

function App() {
  const { isAuthenticated: auth, user } = useAppSelector(state => state.authentication);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />

      <Route
        path="/auth"
        element={
          <CheckAuthentication isAuthenticated={auth} userDetails={user}>
            <AuthLayout />
          </CheckAuthentication>
        }
      >
        <Route index element={<LoginPage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <CheckAuthentication isAuthenticated={auth} userDetails={user}>
            <AdminLayout />
          </CheckAuthentication>
        }
      >
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="orders" element={<AdminOrdersdPage />} />
        <Route path="products" element={<AdminProductsdPage />} />
      </Route>

      <Route
        path="/rental"
        element={
          <CheckAuthentication isAuthenticated={auth} userDetails={user}>
            <Outlet />
          </CheckAuthentication>
        }
      >
        <Route index path="home" element={<HomePage />} />
        <Route path="details/:id" element={<ViewProperyPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="wishlist" element={<ListingPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="help" element={<>Help</>} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      <Route path="/unauthorized" element={<UnAuthorizedPage />} />
    </Routes>
  );
}

export default App;
