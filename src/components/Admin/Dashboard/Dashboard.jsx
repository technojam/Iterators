import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Route, Switch, useRouteMatch } from 'react-router-dom'
import { auth } from '../../../config/firebase'
import { logoutUser } from '../../../redux/actionCreators/authActionCreators'
import AddPost from "./AddPost"

const DashMain = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const logout = () => {
        console.log("Help")
        auth.signOut();
        dispatch(logoutUser());
        history.push("/");
    }
    return (
        <div>
            <Button onClick={logout} variant="contained" color="primary">
                Logout
            </Button>
            <h1>This is DashBoard</h1>
        </div>
    )
}

export default function Dashboard() {
    const path = useRouteMatch();
    console.log(path)
    return (
        <Switch>
            <Route exact path={`${path}/`} component={DashMain} />


        </Switch>
    )
}
