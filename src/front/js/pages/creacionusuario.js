import React from "react";
import "../../styles/registropymes.scss";
import { Home } from "./home";
import { Link } from "react-router-dom";

export const Creacionusuario = creacionusuario => {
	return (
		<div className="container">
			<div className="wrapper text-white">
				<div className="creacionusuario">
					<div className="form-correo">
						<p className="title">Generar Contraseña nuevo usuario</p>
					</div>
					<div>
						<input type="text" placeholder="correo" />
						<label className="fa fa-user" />
					</div>

					<div>
						<button>
							<label className="spinner" />
							<span className="state">Generar Contraseña</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
