import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
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

export default function LoginButton() {
	const classes = useStyles();

	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				size="large"
				className={classes.button}
				startIcon={<AccountCircleIcon />}>
				<Link className={classes.links} to="/registropymes">
					Acceso PYMES
				</Link>
			</Button>
		</div>
	);
}
