import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme) => ({
	root: {
		background: "linear-gradient(39deg, rgba(71,162,212,1) 15%, rgba(176,58,255,1) 33%, rgba(255,118,170,1) 65%, rgba(84,183,200,0.8427520666469712) 84%, rgba(12,107,255,1) 100%);",
		zIndex: "-1",
	},
	logo: {
		width: "40px",
		transform: "scale(2.3)",
		marginRight: "1.1em",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		fontSize: "1.7em",
		fontFamily: `Google Sans, -apple-system, BlinkMacSystemFont, "Segoe UI"`,
	},
	titleBIG:{
		fontWeight: 'bold',
	},
	userlogo: {
		color: `invert`,
		filter: "invert(0.1) drop-shadow(1px 1px 5px rgba(253, 253, 253, 0.4))",
		transform:"scale(1.7)",
	}
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);


	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" className={classes.root}>

			<Toolbar>
				{/* logo and text ,also make it conditional when user in the */}
				{window.location.pathname === "/" ? (
					<Typography variant="h6" className={classes.title}>
						Welcome to&nbsp;
						<span variant="h6" className={classes.titleBIG} >Technojam Blogpost</span>
					</Typography>
				) : (
					<React.Fragment>
						<img src="TechnoJam.png"
							alt="logo"
							className={classes.logo} />
						<Typography variant="h6" className={classes.title}>
							Technojam Blogposts
						</Typography>
					</React.Fragment>
				)}


				{auth && (
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit">
							<PermIdentityIcon className={classes.userlogo}/>
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