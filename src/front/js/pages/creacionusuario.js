import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";
import { Home } from "./home";
import { Link } from "react-router-dom";

export const Creacionusuario = () => {
	const { store, actions } = useContext(Context);
	const [token, setToken] = useState(sessionStorage.getItem("my_token"));
	const [email, setEmail] = useState("");

	const handleCrearUsuario = e => {
		e.preventDefault();

		if (!token) {
			return;
		}

		const body = {
			email: email
		};
		var requestOptions = {
			method: "POST",
			body: JSON.stringify(body),
			redirect: "follow",
			headers: new Headers({
				"Content-Type": "application/json",
				Accept: "*/*",
				Authorization: "Bearer " + token
			})
		};

		fetch("https://busca-pyme.herokuapp.com/api/UsuarioNuevo", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="container">
			<div className="wrapper text-white">
				<form onSubmit={handleCrearUsuario}>
					<div className="creacionusuario">
						<div className="form-correo">
							<p className="title">Generar nuevo usuario</p>
						</div>
						<div className="mb-3">
							<input type="text" placeholder="correo" onChange={e => setEmail(e.target.value)} />
							<label className="fa fa-user ml-2" />
						</div>

						<div>
							<button
								type="submit"
								className="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-1 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
								<label className="spinner" />
								<span className="state">Crear Usuario</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
