import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

export default function NavButtons() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
				<Button className={classes.button}>
					<Link className={classes.links} to="/actualizardatos">
						Actualizar Datos
					</Link>
				</Button>
				<Button className={classes.button}>
					<Link className={classes.links} to="/cambiocontrasena">
						Cambio Contraseña
					</Link>
				</Button>
				<Button className={classes.button}>
					<Link className={classes.links} to="/creacionusuario">
						Creación Usuario
					</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
}
