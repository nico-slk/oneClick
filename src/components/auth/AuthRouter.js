import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import LogIn from './components/LogIn'
import Register from './components/Register'

function AuthRouter() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/auth/login" component={LogIn} />
                    <Route path="/auth/register" component={Register} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AuthRouter
