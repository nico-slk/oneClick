import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import PrincipalPage from '../PrincipalPage'
import AuthRouter from './AuthRouter'

function AppRouter() {
    return (
        <BrowserRouter >
            <div>
                <Switch>
                    <Route path="/" component={PrincipalPage} />
                    <Route exact path="/auth" component={AuthRouter} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
