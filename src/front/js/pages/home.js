import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import heroCustom from "../../img/hero-custom.jpeg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import ProvinceCard from "../component/ProvinceCard";
import cartagoImg from "../../img/Cartago.jpg";
import alajuelaImg from "../../img/Alajuela.jpg";
import guanacasteImg from "../../img/Guanacaste.jpg";
import herediaImg from "../../img/Heredia.jpg";
import limonImg from "../../img/Limon.jpg";
import puntarenasImg from "../../img/Puntarenas.jpg";
import sanjoseImg from "../../img/SanJose.jpg";

export const Home = () => {
	return (
		<div className="">
			<div className="w-100">
				<img src={heroCustom} className="img-fluid-home" />
			</div>
			{/* <div className="alert alert-info">{store.message || ""}</div> */}
			<div className="pymeTable col">
				<div className="text-center">
					<h4 className="text-light mt-2">Busc@PYMES</h4>
					<p className="text-light m-5 h3">
						Busc@mos brindar facilidades a los comercios regionales para que puedan anunciar y potenciar las
						ventas de sus productos en todo el país. Para accesar el directorio de comercios: selecciona una
						provincia, luego, busc@ el servicio, cantón u otro valor que considere apropiado y finalmente,
						seleccione la empresa que desea contactar.
					</p>
				</div>
				<div className="container-fluid">
					<div className="d-flex justify-content-center flex-wrap">
						<Link to="/provincia/alajuela">
							<ProvinceCard route="alajuela" provinceName="Alajuela" imagen={alajuelaImg} />
						</Link>
						<Link to="/provincia/cartago">
							<ProvinceCard route="cartago" provinceName="Cartago" imagen={cartagoImg} />
						</Link>
						<Link to="/provincia/guanacaste">
							<ProvinceCard route="guanacaste" provinceName="Guanacaste" imagen={guanacasteImg} />
						</Link>
						<Link to="/provincia/heredia">
							<ProvinceCard route="heredia" provinceName="Heredia" imagen={herediaImg} />
						</Link>
						<Link to="/provincia/limon">
							<ProvinceCard route="limon" provinceName="Limón" imagen={limonImg} />
						</Link>
						<Link to="/provincia/puntarenas">
							<ProvinceCard route="puntarenas" provinceName="Puntarenas" imagen={puntarenasImg} />
						</Link>
						<Link to="/provincia/sanjose">
							<ProvinceCard route="sanjose" provinceName="San José" imagen={sanjoseImg} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
