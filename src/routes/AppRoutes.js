import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PrincipalPageScreen from '../components/screens/PrincipalPageScreen'
import AuthRoutes from '../components/auth/AuthRoutes'

function AppRoutes() {
    return (
        <BrowserRouter >
            <div>
                <NavBar />
                <Switch>
                    <Route path="/auth" component={AuthRoutes} />
                    <Route exact path="/" component={PrincipalPageScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes
