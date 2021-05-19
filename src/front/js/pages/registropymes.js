import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";
import { Home } from "./home";
import { Link } from "react-router-dom";

export const Registropymes = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginRoute, setLoginRoute] = useState("registropymes");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);
	let myStorage = window.sessionStorage;

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			usuario: username,
			contrasena: password
		};

		// fetch de LOGIN
		fetch("https://busca-pyme.herokuapp.com/api/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(result => {
				console.log("result", result.token);
				// añadir token a session
				sessionStorage.setItem("my_token", result.token);
				if (myStorage.my_token === "undefined") {
					alert("Wrong Username or Password.");
				} else {
					alert("Login was successful.");
				}

				if (result.idTipo === 2) {
					setLoginRoute("actualizardatos");
				}
				if (result.idTipo === 1) {
					setLoginRoute("creacionusuario");
				}
				result ? setAuth(true) : "";
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="wrapper">
			<div className="text-white login">
				<form onSubmit={handleSubmit}>
					<div className="form-login">
						<p className="title">Log in</p>
					</div>
					<div>
						<input type="text" placeholder="Correo" onChange={e => setUsername(e.target.value)} />
						<label className="fa fa-user ml-2" />
					</div>

					<div>
						<input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />

						<label className="fa fa-key" />
					</div>
					<div>
						<button type="submit">
							<label className="spinner" />
							<span className="state">Log in</span>
						</button>
					</div>
				</form>
			</div>
			{auth ? <Redirect to={loginRoute} /> : null}
		</div>
	);
};
