import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container bg-dark">
			<div className="row justify-content-center text-white">
				<h1>
					Pyme <br />
					{store.provincia[params.theid].nombre}
				</h1>
				<div className="container">
					<div className=" row justify-content-center">
						<img className="col-6 card-img-top singleImg" src="https://picsum.photos/id/237/400/300" />
					</div>
				</div>
				<div className="col text-white">
					Provincia:
					<br />
					{store.provincia[params.theid].id_provincia}
				</div>

				<div className="col text-white">
					Cantón:
					<br />
					{store.provincia[params.theid].id_canton}
				</div>
			</div>
			<div className="col text-white">
				Tipo Servicio:
				<br />
				{store.provincia[params.theid].id_tiposServicio}
			</div>
			<div className="col text-white">
				<br />
				Teléfono: {store.provincia[params.theid].telefono}
			</div>
			<div className="col text-white">
				<br />
				Facebook: {store.provincia[params.theid].facebook}
			</div>
			<div className="col text-white">
				<br />
				Instagram: {store.provincia[params.theid].instagram}
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
