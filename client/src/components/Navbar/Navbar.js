import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Popover } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const classes = useStyles();

	const logout = () => {
		dispatch({ type: actionType.LOGOUT });

		history.push('/auth');

		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const matches = useMediaQuery('(max-width:500px)');

	return (
		<AppBar className={matches ? classes.appBar2 : classes.appBar} position="static" color="inherit">
			<div className={classes.brandContainer}>
				<Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
					Yadee
				</Typography>
				<img className={classes.image} src={memories} alt="icon" height="60" />
			</div>
			<div>
				{matches ? (
					<div>
						<Button aria-describedby={id} onClick={handleClick}>
							<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
								{user?.result.name.charAt(0)}
							</Avatar>
							<ArrowDownwardIcon color="secondary" />
						</Button>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
						>
							<div>
								{user?.result ? (
									<div>
										<Button variant="contained" className={classes.logout} onClick={logout}>
											Logout
										</Button>
									</div>
								) : (
									<Button
										component={Link}
										to="/auth"
										className={classes.signin}
										variant="contained"
										color="primary"
									>
										Sign In
									</Button>
								)}
							</div>
						</Popover>
					</div>
				) : (
					<Toolbar className={classes.toolbar}>
						{user?.result ? (
							<div className={classes.profile}>
								<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
									{user?.result.name.charAt(0)}
								</Avatar>
								<Typography className={classes.userName} variant="h6">
									{user?.result.name}
								</Typography>
								<Button variant="contained" className={classes.logout} onClick={logout}>
									Logout
								</Button>
							</div>
						) : (
							<Button component={Link} to="/auth" variant="contained" className={classes.signin}>
								Sign In
							</Button>
						)}
					</Toolbar>
				)}
			</div>
		</AppBar>
	);
};

export default Navbar;
