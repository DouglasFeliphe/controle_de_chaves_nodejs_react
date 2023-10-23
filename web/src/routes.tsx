import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import Keys from './pages/Keys/index';
// import Users from './pages/Users';
import Reservations from './pages/Reservations';
import ErrorComponent from './pages/404';
import { Loader } from './components/Loader';

const Users = lazy(() => import('./pages/Users'));

const Suspended = ({ children }: any) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Suspended>
            <Keys />
          </Suspended>
        </Route>
        <Route path='/keys'>
          <Suspended>
            <Keys />
          </Suspended>
        </Route>
        <Route path='/users'>
          <Suspended>
            <Users />
          </Suspended>
        </Route>
        <Route path='/reservations'>
          <Suspended>
            <Reservations />
          </Suspended>
        </Route>
        <Route path='*'>
          <ErrorComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
