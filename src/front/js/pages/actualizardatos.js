import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registropymes.scss";
import { Home } from "./home";

export const Actualizardatos = actualizardatos => {
	const { store, actions } = useContext(Context);

	const [provinciaId, setProvinciaId] = useState(1);
	const handleSelect = e => {
		setProvinciaId(parseInt(e.target.value));
	};
	/* useEffect(() => {
    actions.loadProvincias();
    actions.loadCantones();
    actions.loadServicios();
}, []); */
	return (
		<div className="container">
			<div className="wrapper text-white">
				<div className="form-provincia">
					<label form="sel1">Provincia:</label>
					<select className="form-control" id="sel1" onChange={handleSelect}>
						{store.provincias.map(item => (
							<option key={item.id} value={item.id}>
								{item.nombre}
							</option>
						))}
					</select>
				</div>
				<div className="form-Cantón">
					<label form="usr">Cantón:</label>
					<select className="form-control" id="sel1">
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
					<input type="text" className="form-control" id="usr" />
				</div>
				<div className="form-servicios">
					<label form="sel1">Servicios:</label>
					<select className="form-control" id="sel1">
						{store.servicios.map(item => (
							<option key={item.id} value={item.id}>
								{item.tipo}
							</option>
						))}
					</select>
				</div>
				<div className="form-Teléfono">
					<label form="usr">Teléfono:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
				<div className="form-Teléfono">
					<label form="usr">Otras Señas:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
				<div className="form-Instagram">
					<label form="usr">Instagram:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
				<div className="form-Facebook">
					<label form="usr">Facebook:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
				<div>
					<select name="select">
						<option value="https://images.freejpg.com.ar/900/0405/clothes-jackets-shirts-fashion-clothing-shopping-retail-F100024217.jpg">
							Ropa
						</option>
						<option value="https://images.freejpg.com.ar/900/0705/fork-chicken-tomatoes-pasta-food-lunch-dinner-F100025310.jpg">
							Comida
						</option>
						<option value="https://www.freejpg.com.ar/image-900/dd/dd33/F100011987-mecanico_posando_en_un_taller_mecanico.jpg">
							Servicios
						</option>
						<option value="https://images.freejpg.com.ar/900/0405/people-meeting-computer-business-coworkers-wireless-technology-F100024601.jpg">
							Otros
						</option>
					</select>
				</div>
				<div className="col text-center">
					<button type="submit" className=" spinner">
						Ingresar PYME
					</button>
				</div>
			</div>
		</div>
	);
};
