import { Container, Paper, Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React from 'react';


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
    return (

        <Paper >
            <Container className={classes.mainDiv}>
                <Typography variant="h4" component="h1" className={classes.txt}>
                    Login, Here !
                </Typography>
                <form>
                    <Container className={classes.form}>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}


                            id='standard-basic' label='Email' />
                        <TextField
                            inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                            className={classes.textfield}

                            type="password"

                            id='standard-basic' label='Password' />
                    </Container>
                    <Button className={classes.btn}
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
