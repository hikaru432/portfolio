import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const PublicRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default PublicRoutes;