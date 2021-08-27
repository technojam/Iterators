import React from 'react'
import { Switch, useRouteMatch, Route } from "react-router-dom"
import Login from './Auth/Login/Login'
import Signup from './Auth/Register/Signup'
import Dashboard from './Dashboard/Dashboard'

export default function Admin() {
    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route exact path={path} component={() => <h1>This is admin panel</h1>} />
            <Route path={`${path}/login`} component={Login} />
            <Route path={`${path}/register`} component={Signup} />
            <Route path={`${path}/dashboard`} component={Dashboard} />

        </Switch>

    )
}
