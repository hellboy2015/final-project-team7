import React from "react";
import "../../styles/registropymes.scss";
import { Home } from "./home";

export const Cambiocontrasena = cambiocontrasena => {
	return (
		<div>
			<div className="container">
				<ul>
					<li />
				</ul>
			</div>
			<div className="wrapper text-white">
				<div className="Cambio Contraseña">
					<div className="form-login">
						<label>Cambio Contraseña</label>
					</div>
					<div>
						<input type="text" placeholder="Username" />
						Contraseña Actual
						<label className="fa fa-user" />
					</div>

					<div>
						<input type="password" placeholder="Password" /> Nueva Contraseña
						<label className="fa fa-key" />
					</div>
					<div>
						<input type="password" placeholder="Password" /> Confirmar Contraseña
						<label className="fa fa-key" />
					</div>
					<div>
						<button>
							<label className="spinner" />
							<span className="state">Cambio Contraseña</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
