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
		<div className="text-center">
			<div className="">
				<img src={heroCustom} className="img-fluid" />
			</div>
			{/* <div className="alert alert-info">{store.message || ""}</div> */}
			<span>Busc@PYMES</span>
			<div className="container-fluid">
				<div className="d-flex justify-content-between flex-wrap">
					<ProvinceCard route="alajuela" provinceName="Alajuela" imagen={alajuelaImg} />
					<ProvinceCard route="cartago" provinceName="Cartago" imagen={cartagoImg} />
					<ProvinceCard route="guanacaste" provinceName="Guanacaste" imagen={guanacasteImg} />
					<ProvinceCard route="heredia" provinceName="Heredia" imagen={herediaImg} />
					<ProvinceCard route="limon" provinceName="Limón" imagen={limonImg} />
					<ProvinceCard route="puntarenas" provinceName="Puntarenas" imagen={puntarenasImg} />
					<ProvinceCard route="sanjose" provinceName="San José" imagen={sanjoseImg} />
				</div>
			</div>
		</div>
	);
};
