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
				setStore({
					favorites: result
				});
			})
			.catch(error => console.log("error", error));
	};

	const handleProviniciaCanton = e => {
		setCanton(0);
		setProvinciaId(parseInt(e.target.value));
	};

	const handleTest = e => {
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
	};

	return (
		<div className="container">
			<div className="wrapper text-white">
				<form onSubmit={handleTest} style={{ width: "500px" }}>
					<div className="form-provincia">
						<label form="sel1">Provincia:</label>
						<select className="form-control" id="provincia" onChange={e => handleProviniciaCanton(e)}>
							<option value>-- Seleccione una opci&oacute;n --</option>
							{store.provincias.map(item => (
								<option key={item.id} value={item.id}>
									{item.nombre}
								</option>
							))}
						</select>
					</div>
					<div className="form-Cantón">
						<label form="usr">Cantón:</label>
						<select
							className="form-control"
							id="canton"
							onChange={e => setCanton(parseInt(e.target.value))}
							value={canton}>
							<option id="defaultCanton" value="0">
								-- Seleccione una opci&oacute;n --
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
					<div className="form-Name">
						<label form="usr">Nombre Pymes:</label>
						<input
							type="text"
							className="form-control"
							id="nombrePyme"
							onChange={e => setNombrePyme(e.target.value)}
						/>
					</div>
					<div className="form-servicios">
						<label form="sel1">Servicios:</label>
						<select
							className="form-control"
							id="servicios"
							onChange={e => setTipoServicio(parseInt(e.target.value))}>
							<option hidden disabled selected value>
								-- Seleccione una opci&oacute;n --
							</option>
							{store.servicios.map(item => (
								<option key={item.id} value={item.id}>
									{item.tipo}
								</option>
							))}
						</select>
					</div>
					<div className="form-Teléfono">
						<label form="telefono">Teléfono:</label>
						<input
							type="text"
							className="form-control"
							id="telefono"
							onChange={e => setTelefono(e.target.value)}
						/>
					</div>
					<div className="form-Teléfono">
						<label form="otrasSenas">Otras Señas:</label>
						<input
							type="text"
							className="form-control"
							id="otrasSenas"
							onChange={e => setOtrasSenas(e.target.value)}
						/>
					</div>
					<div className="form-Instagram">
						<label form="instagram">Instagram:</label>
						<input
							type="text"
							className="form-control"
							id="instagram"
							onChange={e => setInstagram(e.target.value)}
						/>
					</div>
					<div className="form-Facebook">
						<label form="facebook">Facebook:</label>
						<input
							type="text"
							className="form-control"
							id="facebook"
							onChange={e => setFacebook(e.target.value)}
						/>
					</div>
					<div className="col text-center">
						<button
							type="submit"
							className="spinner MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-1 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge">
							Ingresar PYME
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
