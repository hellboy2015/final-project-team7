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
	const [dbResult, setDBResult] = useState([]);

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
				alert(result.msg);
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

	async function handleCargaDatosDesdeDB() {
		console.log(token);
		if (!token) {
			return;
		}
		var requestOptions = {
			method: "GET",
			headers: new Headers({
				"Content-Type": "application/json",
				Accept: "*/*",
				Authorization: "Bearer " + token
			})
		};

		async function getData() {
			const response = await fetch("https://busca-pyme.herokuapp.com/api/actualizadatos", requestOptions);
			const users = await response.json();
			console.log(users);
			setOtrasSenas(users[0].otrasSenas);
			setFacebook(users[0].facebook);
			setInstagram(users[0].instagram);
			setTelefono(users[0].telefono);
			setTipoServicio(users[0].tipoServicio);
			setNombrePyme(users[0].nombrePyme);
			setCanton(users[0].canton);
			setProvinciaId(users[0].provincia);

			return users;
		}

		await setDBResult({ dbResult: getData()[0] });
	}

	useEffect(() => {
		handleCargaDatosDesdeDB();
		actions.loadCantones();
		actions.loadProvincias();
		actions.loadServicios();
		console.log(dbResult);
		//console.log(users[0].canton);
		//console.log(dbResult[0]);
	}, []);

	return (
		<div className="wrapper">
			<div className="text-white login">
				<form onSubmit={handleActualizarDatos}>
					<div>
						<p className="title pb-0">Actualiza tus datos</p>
					</div>
					<div className="form-login mb-2">
						<select
							className="form-login"
							id="provincia"
							onChange={e => handleProviniciaCanton(e)}
							defaultValue="0">
							{
								<option hidden disabled value="0">
									{provinciaId === ""
										? "-- Seleccione una provincia --"
										: store.provincias.find(x => x.id === provinciaId).nombre}
								</option>
							}
							{store.provincias.map(item => (
								<option key={item.id} value={item.id}>
									{item.nombre}
								</option>
							))}
						</select>
					</div>
					<div className="form-login mb-2">
						<select className="form-login" id="canton" onChange={e => setCanton(parseInt(e.target.value))}>
							<option id="defaultCanton" value="0">
								{canton == ""
									? "-- Seleccione un Cantón: --"
									: store.cantones.find(x => x.id === canton).nombre}
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
					<div className="form-login mb-2">
						<select
							className="form-login"
							id="servicios"
							onChange={e => setTipoServicio(parseInt(e.target.value))}
							defaultValue="0">
							{
								<option hidden disabled value="0">
									{tipoServicio === ""
										? "-- Seleccione un servicio --"
										: store.servicios.find(x => x.id === tipoServicio).tipo}
								</option>
							}
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
							value={nombrePyme}
							className="form-login"
							id="nombrePyme"
							onChange={e => setNombrePyme(e.target.value)}
						/>
					</div>

					<div className="form-login">
						<input
							type="text"
							placeholder={"Teléfono"}
							value={telefono}
							className="form-login"
							id="telefono"
							onChange={e => setTelefono(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder="Otras Señas"
							value={otrasSenas}
							className="form-login"
							id="otrasSenas"
							onChange={e => setOtrasSenas(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder={"Instagram"}
							value={instagram}
							className="form-login"
							id="instagram"
							onChange={e => setInstagram(e.target.value)}
						/>
					</div>
					<div className="form-login">
						<input
							type="text"
							placeholder="Facebook"
							value={facebook}
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
