import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<img className="w-25" src={logo} />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor02"
				aria-controls="navbarColor02"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarColor02">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Inicio
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Registro
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Login
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Provincias
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" />
					<button className="btn btn-secondary my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
