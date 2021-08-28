import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


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
		width: "2em",
		color: `invert`,
		filter: "invert(0.3) drop-shadow(1px 1px 5px rgba(253, 253, 253, 0.4))",
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
				{window.location.pathname === "/" ? (
					<React.Fragment>
						<Typography variant="h6" className={classes.title}>
							Welcome to 
							<span variant="h6" className={classes.titleBIG} >Technojam Blopost</span>
						</Typography>
          </React.Fragment>

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
							color="inherit"
						>
							{/* IMAGE SVG FOR THE LOGO FOR THE USER */}
							<svg version="1.0" className={classes.userlogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
								fill="#000000" stroke="none">
								<path d="M2375 5105 c-243 -40 -472 -147 -657 -307 -162 -141 -310 -382 -356-581 l-17 -69 -55 -28 c-66 -33 -133 -103 -163 -168 -21 -45 -22 -59 -22 -407
								l0 -360 26 -55 c51 -106 157 -183 276 -200 70 -9 161 3 214 30 21 11 40 20 42
								20 3 0 24 -26 48 -57 23 -32 73 -88 111 -124 l68 -66 -67 19 c-101 29 -254 35
								-328 14 -151 -44 -167 -162 -36 -259 65 -47 121 -98 121 -108 0 -4 -27 -24
								-61 -45 -92 -55 -217 -162 -284 -243 -166 -199 -264 -422 -295 -671 -11 -90
								-14 -1066 -4 -1119 6 -28 12 -32 88 -56 414 -126 795 -203 1216 -247 184 -19
								678 -16 864 5 391 45 726 126 955 233 52 24 103 44 113 44 19 0 19 14 15 583
								-4 640 -5 651 -72 837 -99 274 -310 525 -555 659 l-50 27 28 26 c15 15 50 44
								79 65 77 57 96 87 97 145 1 44 -3 53 -31 78 -77 69 -273 79 -447 24 -12 -4 10
								23 52 65 39 39 97 108 128 152 l56 79 49 -36 c73 -54 140 -76 229 -76 130 0
								237 55 303 155 56 86 57 91 57 458 0 322 -1 341 -22 396 -38 103 -152 198
								-260 217 -34 6 -38 11 -48 49 -49 195 -150 375 -294 525 -179 187 -396 308
								-651 363 -122 27 -341 33 -460 14z m325 -115 c427 -53 794 -337 924 -716 42
								-124 44 -116 -28 -148 -35 -15 -72 -36 -82 -47 -9 -10 -20 -19 -24 -19 -4 0
								-29 35 -57 78 -215 327 -606 516 -983 473 -186 -21 -353 -81 -499 -180 -76
								-52 -195 -169 -251 -246 -24 -33 -44 -61 -45 -63 -2 -2 -30 6 -64 18 -33 11
								-72 20 -86 20 -30 0 -30 1 -4 79 32 99 64 165 122 254 230 353 654 549 1077
								497z m452 -944 c174 -41 270 -235 196 -397 -31 -69 -78 -115 -148 -148 -52
								-25 -64 -26 -215 -26 -151 0 -163 1 -215 26 -144 67 -210 227 -155 372 6 15 1
								17 -45 17 -46 0 -51 -2 -45 -17 55 -145 -11 -305 -155 -372 -51 -24 -65 -26
								-205 -26 -177 0 -227 11 -289 66 l-43 38 -6 153 c-3 84 -8 162 -12 173 -11 38
								96 125 180 146 17 4 271 7 565 8 413 0 548 -2 592 -13z m-1372 -1386 c106 -26
								243 -92 339 -164 l75 -56 350 0 351 0 70 53 c87 65 208 128 300 156 131 41
								338 37 352 -6 5 -15 -26 -46 -100 -98 -32 -22 -69 -57 -83 -77 -15 -21 -52
								-52 -83 -69 -77 -43 -227 -197 -299 -307 -198 -301 -330 -731 -391 -1272 -23
								-201 -41 -474 -41 -620 l0 -101 -62 3 -63 3 -6 195 c-27 790 -170 1393 -425
								1783 -85 130 -232 279 -324 327 -35 18 -75 46 -88 62 -14 16 -60 56 -103 89
								-44 33 -79 67 -79 75 0 45 167 58 310 24z m465 -110 c19 -8 19 -9 -2 -9 -12
								-1 -25 4 -28 9 -7 12 2 12 30 0z m630 0 c-3 -5 -14 -10 -23 -9 -14 0 -13 2 3
								9 27 11 27 11 20 0z"/>
							</g>
							</svg>
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