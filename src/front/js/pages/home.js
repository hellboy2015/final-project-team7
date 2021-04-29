import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<Hero />
			<div>
				<ul className="list-group">
					{store.provincia.map((item, index) => {
						return (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between"
								style={{ background: item.background }}>
								<Link to={"/single/" + index}>
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
