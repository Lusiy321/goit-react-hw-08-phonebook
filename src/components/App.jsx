import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/Auth/authActions';

import { Layout } from './Layout';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { ContactsPage } from '../pages/Contacts';
import { PublicRoute } from '../Routes/PublicRoute';
import { PrivatRoute } from '../Routes/PrivatRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};