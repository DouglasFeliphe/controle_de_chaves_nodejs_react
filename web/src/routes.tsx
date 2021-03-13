import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import Keys from './pages/Keys/index';
import Users from './pages/Users';
import Reservations from './pages/Reservations';
import ErrorComponent from './pages/404';


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Keys />
                </Route>
                <Route path='/keys' >
                    <Keys />
                </Route>
                <Route path='/users' >
                    <Users />
                </Route>
                <Route path='/reservations'>
                    <Reservations />
                </Route>
                <Route path='*'>
                    <ErrorComponent />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes