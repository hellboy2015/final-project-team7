import React, { useContext, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const StyledTableCell = withStyles(theme => ({
	header: {
		fontSize: 15
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(0)": {
			backgroundColor: theme.palette.TableBody.palette.hover
		}
	}
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700
	}
});

function ajusteNombreProvincia(nombreProvincia) {
	switch (nombreProvincia) {
		case "sanjose":
			return "San Jose";
			break;
		case "limon":
			return "Limón";
			break;
		default:
			return nombreProvincia.charAt(0).toUpperCase() + nombreProvincia.slice(1);
	}
}

export default function PymesTable() {
	const classes = useStyles();

	const columnsName = [
		"#",
		"Provincia",
		"Cantón",
		"Nombre PYMES",
		"Servicio",
		"Teléfono",
		"Otras Señas",
		"Facebook",
		"Instagram"
	];

	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.loadProvincia(idProvincia);
	}, []);

	let idProvincia = store.provincias.find(x => x.nombre === ajusteNombreProvincia(params.nombre)).id;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table bg-dark">
				<TableHead>
					<TableRow>
						{columnsName.map((col, idx) => {
							return (
								<StyledTableCell
									key={idx}
									align="left"
									sortDirection={col === "Servicio" ? "asc" : false}>
									{col}
								</StyledTableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{store.provincia.map((item, index) => (
						<StyledTableRow key={item.id}>
							<StyledTableCell component="th" scope="row">
								{item.id}
							</StyledTableCell>
							<StyledTableCell align="left">
								{store.provincias.find(x => x.id === item.id_provincia).nombre}
							</StyledTableCell>
							<StyledTableCell align="left">
								{store.cantones.find(x => x.id === item.id_canton).nombre}
							</StyledTableCell>
							<StyledTableCell align="left">
								<Link to={"/single/" + item.id}>
									<span>{item.nombre}</span>
								</Link>
							</StyledTableCell>
							<StyledTableCell align="left">
								{store.servicios.find(x => x.id === item.id_tiposServicio).tipo}
							</StyledTableCell>
							<StyledTableCell align="left">{item.telefono}</StyledTableCell>
							<StyledTableCell align="left">{item.otrassenas}</StyledTableCell>
							<StyledTableCell align="left">{item.facebook}</StyledTableCell>
							<StyledTableCell align="left">{item.instagram}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
