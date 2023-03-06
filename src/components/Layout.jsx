import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/AppBar';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};