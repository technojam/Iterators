import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, useRouteMatch, Route, useHistory } from "react-router-dom"
import { auth } from '../../config/firebase'
import { loginUser } from '../../redux/actionCreators/authActionCreators'
import Login from './Auth/Login/Login'
import Signup from './Auth/Register/Signup'
import AddPost from './Dashboard/AddPost'
import Dashboard from './Dashboard/Dashboard'

export default function Admin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { path } = useRouteMatch()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user === null) {
                history.push("/admin/login");
                return;
            }

            const data = {
                user: user.providerData[0],
                id: user.uid,
            }
            dispatch(loginUser(data));
            history.push("/admin/dashboard");

        })
    }, [])
    return (
        <Switch>
            <Route exact path={path} component={() => <h1>This is admin panel</h1>} />
            <Route path={`${path}/login`} component={Login} />
            <Route path={`${path}/register`} component={Signup} />
            <Route path={`${path}/dashboard`} component={Dashboard} />
            <Route path={`${path}/addpost`} component={AddPost} />
        </Switch>

    )
}
