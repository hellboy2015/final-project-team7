import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";
import { Home } from "./home";
import { Link } from "react-router-dom";

export const Registropymes = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginRoute, setLoginRoute] = useState("");
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
		fetch("https://busca-pyme.herokuapp.com/api/login/", {
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
				if (result.idTipo === 2) {
					setLoginRoute("actualizardatos");
				} else {
					setLoginRoute("creacionusuario");
				}
				console.log("myStorage", myStorage);
				result ? setAuth(true) : "";
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<div className="wrapper text-white">
				<form onSubmit={handleSubmit} style={{ width: "500px" }}>
					<div className="login">
						<div className="form-login">
							<p className="title">Log in</p>
						</div>
						<div>
							<input onChange={e => setUsername(e.target.value)} type="text" placeholder="Correo" />
							<label className="fa fa-user" />
						</div>

						<div>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Contraseña"
							/>
							<label className="fa fa-key" />
						</div>
						<div>
							<button type="submit">
								<label className="spinner" />
								<span className="state">Log in</span>
							</button>
						</div>
					</div>
				</form>
			</div>
			{auth ? <Redirect to={loginRoute} /> : null}
		</div>
	);
};
