import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";
import { Home } from "./home";

export const Actualizardatos = () => {
	const { store, actions } = useContext(Context);
	const [provinciaId, setProvinciaId] = useState(1);
	const [canton, setCanton] = useState(1);
	const [nombrePyme, setNombrePyme] = useState("");
	const [tipoServicio, setTipoServicio] = useState(1);
	const [telefono, setTelefono] = useState("");
	const [otrasSenas, setOtrasSenas] = useState("");
	const [instagram, setInstagram] = useState("");
	const [facebook, setFacebook] = useState("");
	const [token, setToken] = useState(sessionStorage.getItem("my_token"));

	/* const handleSelect = e => {
        setProvinciaId(parseInt(e.target.value));
    }; */

	const handleActualizarDatos = e => {
		e.preventDefault();

		if (!token) {
			return;
		}

		const body = {
			provincia: provinciaId,
			canton: canton,
			nombrePyme: nombrePyme,
			tipoServicio: tipoServicio,
			telefono: telefono,
			otrasSenas: otrasSenas,
			instagram: instagram,
			facebook: facebook
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

		fetch("https://busca-pyme.herokuapp.com/api/actualizapyme", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
			})
			.catch(error => console.log("error", error));
	};

	const handleProviniciaCanton = e => {
		setCanton(0);
		setProvinciaId(parseInt(e.target.value));
	};

	/* const handleTest = e => {
        e.preventDefault();

        const body = {
            provincia: provinciaId,
            canton: canton,
            nombrePyme: nombrePyme,
            tipoServicio: tipoServicio,
            telefono: telefono,
            otrasSenas: otrasSenas,
            instagram: instagram,
            facebook: facebook
        };

        console.log(JSON.stringify(body));
    }; */

	return (
		<div className="wrapper">
			<div className="text-white login">
				<form onSubmit={handleActualizarDatos}>
					<div>
						<p className="title">Actualiza tus datos</p>
					</div>
					<div>
						<select className="form-login" id="provincia" onChange={e => handleProviniciaCanton(e)}>
							<option value>-- Seleccione una Provincia: --</option>
							{store.provincias.map(item => (
								<option key={item.id} value={item.id}>
									{item.nombre}
								</option>
							))}
						</select>
					</div>
					<div>
						<select
							className="form-login"
							id="canton"
							onChange={e => setCanton(parseInt(e.target.value))}
							value={canton}>
							<option id="defaultCanton" value="0">
								-- Seleccione un Cantón: --
							</option>
							{store.cantones
								.filter(cantonesToFilter => cantonesToFilter.id_provincias === provinciaId)
								.map((item, index) => (
									<option key={index} value={item.id}>
										{item.nombre}
									</option>
								))}
						</select>
					</div>
					<div className="form-login">
						<select
							className="form-login"
							id="servicios"
							onChange={e => setTipoServicio(parseInt(e.target.value))}>
							<option hidden disabled selected value>
								-- Seleccione un Servicio --
							</option>
							{store.servicios.map(item => (
								<option key={item.id} value={item.id}>
									{item.tipo}
								</option>
							))}
						</select>
					</div>

					<div className="form-login">
						<input
							type="text"
							placeholder="Nombre Pymes"
							className="form-login"
							id="nombrePyme"
							onChange={e => setNombrePyme(e.target.value)}
						/>
					</div>

					<div className="form-login">
						<input
							type="text"
							placeholder="Teléfono"
							className="form-login"
							id="telefono"
							onChange={e => setTelefono(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder="Otras Señas"
							className="form-login"
							id="otrasSenas"
							onChange={e => setOtrasSenas(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder="Instagram"
							className="form-login"
							id="instagram"
							onChange={e => setInstagram(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder="Facebook"
							className="form-login"
							id="facebook"
							onChange={e => setFacebook(e.target.value)}
						/>
					</div>
					<div className="text-center">
						<button type="submit">
							<label className="spinner" />
							<span className="state">Actualizar Datos</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
