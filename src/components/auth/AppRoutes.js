import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import PrincipalPageScreen from '../screens/PrincipalPageScreen'
import AuthRoutes from './AuthRoutes'

function AppRoutes() {
    return (
        <BrowserRouter >
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRoutes} />
                    <Route exact path="/" component={PrincipalPageScreen} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes
