import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../../img/logoproyecto.png";
import LoginButton from "./LoginButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import NavButtons from "./NavButtons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	button: {
		color: "#212529",
		textDecoration: "none",
		backgroundColor: "#90caf9",
		"&:hover": {
			background: "#648dae",
			color: "black"
		}
	},
	links: {
		textDecoration: "none",
		color: "#212529",
		"&:hover": {
			textDecoration: "none",
			color: "black"
		}
	}
}));

export const Navbar = () => {
	const classes = useStyles();
	const location = useLocation();
	const routeName = location.pathname.split("/")[1];

	return (
		<nav className="navbar bg-dark">
			<Link className="navbar-brand" to="/">
				<img className="w-25" src={logo} />
			</Link>
			<div className="ml-auto">
				<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
					{/* routeName === "actualizardatos" &&  */ <NavButtons />}
				</ButtonGroup>
			</div>
		</nav>
	);
};
