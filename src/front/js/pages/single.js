import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const pyme = store.provincia.find(x => x.id === parseInt(params.theid));

	return (
		<div className="container bg-silver">
			<div className="row justify-content-center text-dark">
				<h1>
					Pyme <br />
					{pyme.nombre}
				</h1>
				<div className="container">
					<div className=" row justify-content-center ">
						<img className="img-fluid img-thumbnail" src="https://picsum.photos/300" />
					</div>
				</div>
				<div className="container ">
					<div className="col  ">
						<br />
						Provincia: {store.provincias.find(x => x.id === pyme.id_provincia).nombre}
					</div>

					<div className="col ">
						<br />
						Cantón: {store.cantones.find(x => x.id === pyme.id_canton).nombre}
					</div>

					<div className="col ">
						<br />
						Tipo Servicio: {store.servicios.find(x => x.id === pyme.id_tiposServicio).tipo}
					</div>
					<div className="col ">
						<br />
						Teléfono: {pyme.telefono}
					</div>
					<div className="col ">
						<br />
						Facebook: {pyme.facebook}
					</div>
					<div className="col ">
						<br />
						Instagram: {pyme.instagram}
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
