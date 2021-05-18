const getState = ({ getActions, setStore }) => {
	return {
		store: {
			alajuela: [],
			cartago: [],
			heredia: [],
			limon: [],
			puntarenas: [],
			sanjose: [],
			cantones: [],
			provincias: [],
			servicios: [],
			provincia: [],
			imagenes: [
				"https://images.freejpg.com.ar/900/0405/clothes-jackets-shirts-fashion-clothing-shopping-retail-F100024217.jpg",
				"https://images.freejpg.com.ar/900/0705/fork-chicken-tomatoes-pasta-food-lunch-dinner-F100025310.jpg",
				"https://www.freejpg.com.ar/image-900/dd/dd33/F100011987-mecanico_posando_en_un_taller_mecanico.jpg",
				"https://images.freejpg.com.ar/900/0405/people-meeting-computer-business-coworkers-wireless-technology-F100024601.jpg"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCantones: async () => {
				const response = await fetch("https://busca-pyme.herokuapp.com/api/cantones", {
					method: "GET"
				});

				const data = await response.json();
				console.log("cantones", data);

				setStore({ cantones: data });
			},
			loadProvincias: async () => {
				const response = await fetch("https://busca-pyme.herokuapp.com/api/provincias", {
					method: "GET"
				});

				const data = await response.json();
				console.log("provincias", data);

				setStore({ provincias: data });
			},
			loadServicios: async () => {
				const response = await fetch("https://busca-pyme.herokuapp.com/api/servicios", {
					method: "GET"
				});

				const data = await response.json();
				console.log("servicios", data);

				setStore({ servicios: data });
			},
			loadProvincia: async id => {
				const body = {
					provinciaID: id
				};
				const url = "https://busca-pyme.herokuapp.com/api/pymeprovincia";
				const response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
						mode: "no-cors",
						Accept: "*/*"
					}
				});

				const data = await response.json();

				console.log("test", data);
				setStore({ provincia: data });
			}
		}
	};
};

export default getState;
