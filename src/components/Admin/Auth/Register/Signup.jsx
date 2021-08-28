import React, { useState } from 'react';
import { Button, Container, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { loginUser } from "../../../../redux/actionCreators/authActionCreators"
import { auth } from '../../../../config/firebase';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    },
    btn: {
        margin: '4px',
        width: '40%',
        alignSelf: "center"
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        width: '100vw',

    },
    txt: {
        fontWeight: 'bold',
        textAlign: "center"

    },
    mainDiv: {
        paddingTop: '100px',
        marginTop: '100px',
        paddingBottom: '100px',
        backgroundColor: "rgb(26, 27, 31)",
        color: 'white',
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

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !email || !fullName || !confirm)
            return toast.info("Please fill all the fields");

        if (password.length < 8)
            return toast.info("Password must be of length 8 or greater");

        if (password != confirm) {
            return toast.info("Password do not match");

        }

        //Register the user

        auth.createUserWithEmailAndPassword(email, password).then(user => {

            auth.currentUser.updateProfile({
                displayName: fullName
            }).then(() => {
                //add data to redux store
                const user = auth.currentUser;
                const data = {
                    user: user.providerData[0],
                    id: user.uid
                };
                //dispatch
                dispatch(loginUser(data));
                toast.info("You are register and register and logged in successfully")
                history.push("/admin/dashboard");


            }).catch(err => {
                console.log(err);
            })


        }).catch(err => {
            toast.error("Invaild Email or password");
        })

    }

    return (
        <Paper >
            <Container className={classes.mainDiv}>
                <Typography variant="h4" component="h1" className={classes.txt}>
                    Create Your Account.
                </Typography>
                <form noValidate onSubmit={handleSubmit} autoComplete="off">
                    <Container className={classes.form} style={{ textAlign: 'center' }}>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            id='standard-basic'
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            label='Full Name' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            id='standard-basic'
                            className={classes.textfield}
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                            label='Email' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id='standard-basic'
                            type="password"
                            label='passowrd' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                            id='standard-basic'
                            type="password"
                            label='Confirm password' />
                        <br></br>
                        <Button className={classes.btn} type="submit" variant="contained"
                            endIcon={<PersonAddIcon fontSize="large" />}
                            color="primary">Register</Button>
                    </Container>
                </form>
                <Link to="/admin/login" style={{ textDecoration: "none", color: "white" }}>
                    <p style={{ textAlign: 'center' }}>Already Have an account?</p></Link>
            </Container>
        </Paper>

    );
}

export default Signup;
