import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container bg-silver">
			<div className="row justify-content-center text-dark">
				<h1>
					Pyme <br />
					{store.provincia[params.theid].nombre}
				</h1>
				<div className="container">
					<div className=" row justify-content-center ">
						<img className="img-fluid img-thumbnail" src="https://picsum.photos/300" />
					</div>
				</div>
				<div className="container ">
					<div className="col  ">
						<br />
						Provincia:
						{store.provincia[params.theid].id_provincia}
					</div>

					<div className="col ">
						<br />
						Cantón:
						{store.provincia[params.theid].id_canton}
					</div>

					<div className="col ">
						<br />
						Tipo Servicio:
						{store.provincia[params.theid].id_tiposServicio}
					</div>
					<div className="col ">
						<br />
						Teléfono: {store.provincia[params.theid].telefono}
					</div>
					<div className="col ">
						<br />
						Facebook: {store.provincia[params.theid].facebook}
					</div>
					<div className="col ">
						<br />
						Instagram: {store.provincia[params.theid].instagram}
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
