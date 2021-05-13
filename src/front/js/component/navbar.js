import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/Logo2SinLupa.png";
import LoginButton from "./LoginButton";
import NavButtons from "./NavButtons";

export const Navbar = () => {
	const location = useLocation();
	const routeName = location.pathname.split("/")[1];
	console.log(routeName);

	return (
		<nav className="navbar bg-dark">
			<Link className="navbar-brand" to="/">
				<img className="w-50" src={logo} />
			</Link>
			{routeName === "registropymes" && <NavButtons />}

			<div className="ml-auto">
				<LoginButton />
			</div>
		</nav>
	);
};
