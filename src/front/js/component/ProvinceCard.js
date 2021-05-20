import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProvinceCard(props) {
	return (
		<div
			className="card w-custom province-card img-fluid rounded cover-province"
			style={{
				background: `url(${props.imagen})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat"
			}}>
			<div className="">
				<Link className="card-title-custom" to={"/provincia/" + props.route}>
					{props.provinceName}
				</Link>
			</div>
		</div>
	);
}

ProvinceCard.propTypes = {
	route: PropTypes.string,
	provinceName: PropTypes.string
};
