import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const pyme = store.provincia.find(x => x.id === parseInt(params.theid));

	return (
		<div className="container wrapper">
			<div className="row justify-content-center text-white">
				<h1>Pyme {pyme.nombre}</h1>
			</div>
			<div className="row container text-white">
				<div className="col-md-6">
					<img className="img-thumbnail" src="https://picsum.photos/300" />
				</div>
				<div className="col-md-6">
					<div className=" row container ">
						<div className=" col-6 ">
							<br />
							Provincia: {store.provincias.find(x => x.id === pyme.id_provincia).nombre}
						</div>

						<div className="col-6 ">
							<br />
							Cantón: {store.cantones.find(x => x.id === pyme.id_canton).nombre}
						</div>

						<div className="col-6 ">
							<br />
							Tipo Servicio: {store.servicios.find(x => x.id === pyme.id_tiposServicio).tipo}
						</div>
						<div className="col-6 ">
							<br />
							Teléfono: {pyme.telefono}
						</div>
						<div className="col-12 ">
							<br />
							Otras Señas: {pyme.otrassenas}
						</div>

						<div className="col 12 ">
							<br />
							Facebook: <a href="https://www.facebook.com">{pyme.facebook} </a>
						</div>
						<div className="col 12 ">
							<br />
							Instagram: <a href="https://www.instagram.com"> {pyme.instagram} </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
