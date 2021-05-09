import React, { useContext, useEffect } from "react";
import "../../styles/demo.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

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

export const ProvinciaGenerico = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.loadProvincia(idProvincia);
	}, []);

	let idProvincia = store.provincias.find(x => x.nombre === ajusteNombreProvincia(params.nombre)).id;

	return (
		<div className="container">
			<table className="table table-hover table-dark">
				<thead>
					<tr>
						<th scope="col">#</th>

						<th scope="col">Provincia</th>

						<th scope="col">Cantón</th>

						<th scope="col">Nombre PYMES</th>

						<th scope="col">Servicio</th>

						<th scope="col">Teléfono</th>

						<th scope="col">Otras Señas</th>

						<th scope="col">Facebook</th>

						<th scope="col">Instagram</th>
					</tr>
				</thead>
				<tbody>
					{store.provincia.map((item, index) => (
						<tr key={index}>
							<th scope="row">{item.id}</th>
							<td>{store.provincias.find(x => x.id === item.id_provincia).nombre}</td>
							<td>{store.cantones.find(x => x.id === item.id_canton).nombre}</td>
							<td>
								<Link to={"/single/" + item.id}>
									<span>{item.nombre}</span>
								</Link>
							</td>
							<td>{store.servicios.find(x => x.id === item.id_tiposServicio).tipo}</td>
							<td>{item.telefono}</td>
							<td>{item.otrassenas}</td>
							<td> {item.facebook}</td>
							<td>{item.instagram}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
ProvinciaGenerico.propTypes = {
	id: PropTypes.number,
	nombre: PropTypes.string,
	id_provincia: PropTypes.string,
	id_canton: PropTypes.string,
	id_tiposServicio: PropTypes.string,
	telefono: PropTypes.string,
	instagram: PropTypes.string,
	facebook: PropTypes.string
};
export default ProvinciaGenerico;
