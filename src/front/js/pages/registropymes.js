import React from "react";
import "../../styles/registropymes.scss";
import { Home } from "./home";
import { Link } from "react-router-dom";

export const Registropymes = registropymes => {
	return (
		<div>
			<div className="container">
				<ul>
					<li>
						<nav className="navbar mb-3 ">
							<Link to="/actualizardatos">
								<button className=" bg-dark text-white-50 navbar-brand mb-0 h1">
									Actualizar Datos
								</button>
							</Link>
							<div className="bg-dark ml-auto">
								<Link to="/cambiocontrasena">
									<button className="bg-dark text-white-50 navbar-brand mb-0 h1">
										Cambio Contraseña
									</button>
								</Link>
							</div>
							<div className="bg-dark ml-auto">
								<Link to="/creacionusuario">
									<button className="bg-dark text-white-50 navbar-brand mb-0 h1">
										Creación Usuario
									</button>
								</Link>
							</div>
						</nav>
					</li>
				</ul>
			</div>
			<div className="wrapper text-white">
				<div className="login">
					<div className="form-login">
						<p className="title">Log in</p>
					</div>
					<div>
						<input type="text" placeholder="Correo" />
						<label className="fa fa-user" />
					</div>

					<div>
						<input type="password" placeholder="Contraseña" />
						<label className="fa fa-key" />
					</div>
					<div>
						<button>
							<label className="spinner" />
							<span className="state">Log in</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
