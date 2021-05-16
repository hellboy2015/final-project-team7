import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/registropymes.scss";
import { Home } from "./home";

export const Cambiocontrasena = () => {
	const { store, actions } = useContext(Context);
	const [token, setToken] = useState(sessionStorage.getItem("my_token"));
	const [oldPassword, setOldPassword] = useState("");
	const [newPAssword, setNewPAssword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleCambioContrasena = e => {
		e.preventDefault();

		if (!token) {
			return;
		}

		if (oldPassword === newPAssword || oldPassword === confirmPassword) {
			return alert("Su nueva contraseña no puede ser igual a la anterior.");
		}

		if (newPAssword !== confirmPassword) {
			return alert("Su nueva contraseña no coincide con la confirmacion de contraseña.");
		}

		const body = {
			contrasenaanterior: oldPassword,
			contrasenanueva: newPAssword,
			confirmacontrasenanueva: confirmPassword
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

		fetch("https://busca-pyme.herokuapp.com/api/cambiocontrasena", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="text-center">
			<div className="wrapper text-white">
				<form onSubmit={handleCambioContrasena}>
					<div className="Cambio Contraseña">
						<p className="title">Cambio Contraseña</p>
						<div className="form-login">
							<label />
						</div>
						<div className="mb-2">
							<input
								type="password"
								placeholder="Contraseña Actual"
								onChange={e => setOldPassword(e.target.value)}
							/>

							<label className="fa fa-key" />
						</div>

						<div className="mb-2">
							<input
								type="password"
								placeholder="Contraseña"
								onChange={e => setNewPAssword(e.target.value)}
							/>

							<label className="fa fa-key" />
						</div>
						<div className="mb-2">
							<input
								type="password"
								placeholder="Confirmar Contraseña"
								onChange={e => setConfirmPassword(e.target.value)}
							/>

							<label className="fa fa-key" />
						</div>
						<div>
							<button
								type="submit"
								className="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-1 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge m-0">
								<label className="spinner " />
								<span className="state">Cambio Contraseña</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
