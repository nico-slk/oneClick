import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import LogInScreen from '../components/auth/LogInScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import EditUserScreen from '../components/screens/EditUserScreen'

function AuthRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={LogInScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Route exact path="/auth/edituser" component={EditUserScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AuthRoutes
