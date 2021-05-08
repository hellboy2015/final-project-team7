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
			provincia: []
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
