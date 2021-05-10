import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/Logo2SinLupa.png";

export const Navbar = () => {
	const location = useLocation();
	const routeName = location.pathname.split("/")[1];
	console.log(routeName);

	return (
		<nav className="navbar bg-dark">
			<Link className="navbar-brand" to="/">
				<img className="w-50" src={logo} />
			</Link>
			{routeName === "registropymes" && (
				<div>
					<Link to="/actualizardatos">
						<button className=" bg-dark text-white-50 navbar-brand mb-0 h1">Actualizar Datos</button>
					</Link>
					<Link to="/cambiocontrasena">
						<button className="bg-dark text-white-50 navbar-brand mb-0 h1">Cambio Contraseña</button>
					</Link>
					<Link to="/creacionusuario">
						<button className="bg-dark text-white-50 navbar-brand mb-0 h1">Creación Usuario</button>
					</Link>
				</div>
			)}

			<div className="ml-auto">
				<Link to="/registropymes">
					<button className=" bg-dark text-white-50 navbar-brand mb-0 h1"> Acceso PYMES</button>
				</Link>
			</div>
		</nav>
	);
};
