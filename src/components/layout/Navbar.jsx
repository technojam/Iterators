import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
    background: "linear-gradient(39deg, rgba(71,162,212,1) 15%, rgba(176,58,255,1) 33%, rgba(255,118,170,1) 65%, rgba(84,183,200,0.8427520666469712) 84%, rgba(12,107,255,1) 100%);",
	},
	logo: {
		width: "40px",
		transform:"scale(2.3)",
		marginRight: "1.1em",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
  userlogo:{
    width: "2em",
    color : `invert`,
  }
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					{window.location.pathname == "/" ? (
						<>
							{" "}
							<img
								src="TechnoJam.png"
								alt="logo"
								className={classes.logo}
							/>
							<Typography variant="h6" className={classes.title}>
								Welcome to Technojam Blogposts
							</Typography>
						</>
					) : (
						<Typography variant="h6" className={classes.title}>
							Technojam Blogposts
						</Typography>
					)}
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
              <img src="user.svg" className={classes.userlogo} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									Profile
								</MenuItem>
								<MenuItem onClick={handleClose}>
									My account
								</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
	);
}
