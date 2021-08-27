import { Button, Container, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React from 'react';


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
    const classes = useStyles();
    return (
        <Paper >
            <Container className={classes.mainDiv}>
                <Typography variant="h4" component="h1" className={classes.txt}>
                    Create Your Account.
                </Typography>
                <form noValidate autoComplete="off">
                    <Container className={classes.form} style={{ textAlign: 'center' }}>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            id='standard-basic'
                            label='Name' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            id='standard-basic'
                            className={classes.textfield}


                            label='Email' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            id='standard-basic'
                            type="password"
                            label='passowrd' />
                        <br></br>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}
                            id='standard-basic'
                            type="password"
                            label='Confirm password' />
                        <br></br>
                        <Button className={classes.btn} variant="contained"
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
