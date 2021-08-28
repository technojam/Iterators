import React, { useState } from 'react';
import { Container, Paper, Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { toast } from 'react-toastify';
import { auth } from '../../../../config/firebase';
import { loginUser } from '../../../../redux/actionCreators/authActionCreators';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    },
    btn: {
        margin: '10px',
        width: "30%"
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        width: '100vw',
        paddingTop: '100px',
        marginTop: '100px',
        paddingBottom: '100px',

    },
    txt: {
        fontWeight: 'bold',

    },
    mainDiv: {
        paddingTop: '100px',
        marginTop: '100px',
        paddingBottom: '100px',
        backgroundColor: "rgb(26, 27, 31)",
        color: 'white',
        textAlign: 'center'
    },
    img: {
        height: "90vh",
        width: "fixContent"
    },
    box: {
        display: 'flex',
        justifyContent: 'center'
    },
    textfield: {
        width: "60%",
        alignSelf: "center"
    }
}));

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !email)
            return toast.info("Please fill all the fields");

        if (password.length < 8)
            return toast.info("Password must be of length 8 or greater");

        auth.signInWithEmailAndPassword(email, password).then(user => {
            const data = {
                user: user.user.providerData[0],
                id: user.user.uid
            };
            dispatch(loginUser(data));
            toast.success("You are logged in successfully")
            history.push("/admin/dashboard");
        }).catch(err => {
            toast.error("Invalid email or password");
        })

    }

    return (

        <Paper >
            <Container className={classes.mainDiv}>
                <Typography variant="h4" component="h1" className={classes.txt}>
                    Login, Here !
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Container className={classes.form}>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                            id='standard-basic' label='Email' />
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"

                            id='standard-basic' label='Password' />
                    </Container>
                    <Button className={classes.btn}
                        type="submit"
                        endIcon={<VpnKeyIcon fontSize="large" />}
                        variant="contained" color="primary">Login</Button>
                </form>
                <Link to="/admin/register" style={{ textDecoration: "none", color: "white" }}>
                    <p style={{ textAlign: 'center' }}>Don't have an account?</p></Link>
            </Container>
        </Paper>
    );
}

export default Login;
