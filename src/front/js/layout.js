import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Registropymes } from "./pages/registropymes";
import { Actualizardatos } from "./pages/actualizardatos";
import { Cambiocontrasena } from "./pages/cambiocontrasena";
import { Creacionusuario } from "./pages/creacionusuario";
import injectContext from "./store/appContext";

import { ProvinciaGenerico } from "./pages/testProvinciaGenerico";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/provincia/:nombre">
							<ProvinciaGenerico />
						</Route>
						<Route exact path="/registropymes" component={Registropymes} />
						<Route exact path="/actualizardatos" component={Actualizardatos} />
						<Route exact path="/cambiocontrasena" component={Cambiocontrasena} />
						<Route exact path="/creacionusuario" component={Creacionusuario} />
						<Route exact path="/single/:theid" component={Single} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
