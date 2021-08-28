import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../../../config/firebase'
import { logoutUser } from '../../../redux/actionCreators/authActionCreators'

export default function Dashboard() {
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
