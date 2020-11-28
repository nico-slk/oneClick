import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterSreen'

function AuthRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={LogInScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AuthRoutes
