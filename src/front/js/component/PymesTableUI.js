import React, { forwardRef, useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

function ajusteNombreProvincia(nombreProvincia) {
	switch (nombreProvincia) {
		case "sanjose":
			return "San Jose";
			break;
		case "limon":
			return "Limón";
			break;
		default:
			return nombreProvincia.charAt(0).toUpperCase() + nombreProvincia.slice(1);
	}
}

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function PymesTableUI() {
	const { store, actions } = useContext(Context);
	const [provinceData, setProvinceData] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.loadProvincia(idProvincia);
	}, []);

	let idProvincia = store.provincias.find(x => x.nombre === ajusteNombreProvincia(params.nombre)).id;
	//console.log(store.provincia);

	/*Heiner Guillen: Metodo para ajustar las provincias y cantones con sus valores reales (no los ids) */
	const adjustData = data => {
		if (data) {
			const result = data.provincia.map((item, index) => {
				const provincia = data.provincias.find(x => x.id === item.id_provincia).nombre;
				const canton = store.cantones.find(x => x.id === item.id_canton).nombre;
				const servicio = store.servicios.find(x => x.id === item.id_tiposServicio).tipo;
				return { ...item, provincia, canton, servicio };
			});
			return result;
		}
		return data;
	};

	/** Efecto para colocar en estado los datos de la provincia depurados una vez se obtengan las provincias con los actions */
	useEffect(
		() => {
			setProvinceData(adjustData(store));
		},
		[store.provincia]
	);

	return (
		<div style={{ maxWidth: "100%" }}>
			<MaterialTable
				columns={[
					{ title: "#", field: "id" },
					{ title: "Provincia", field: "provincia" },
					{ title: "Cantón", field: "canton" },
					{
						title: "Nombre PYMES",
						field: "nombre",
						render: function nameLink(rowData) {
							return <Link to={"/single/" + rowData.id}>{rowData.nombre}</Link>;
						}
					},
					{ title: "Servicio", field: "servicio" },
					{ title: "Teléfono", field: "telefono" },
					{ title: "Otras Señas", field: "otrassenas" },
					{ title: "Facebook", field: "facebook" },
					{ title: "Instagram", field: "instagram" }
				]}
				data={provinceData}
				title="Directorio de la Provincia"
				icons={tableIcons}
				options={{
					headerStyle, maxBodyHeight: {
						backgroundColor: "#060707",
						color: "#FFF"
					},
					actionsColumnIndex: -1
				}}
				localization={{
					toolbar: {
						searchTooltip: "Busc@r",
						searchPlaceholder: "Busc@r"
					}
				}}
			/>
		</div>
	);
}

export default PymesTableUI;

/**
 * Documentacion Material Table
 * https://material-table.com/#/
 */
