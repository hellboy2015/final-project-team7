import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-white bg-dark">
		<p>
			<Link to={"buscapymes@gmail.com"}>
				<span>buscapymes@gmail.com</span>
			</Link>
		</p>
	</footer>
);
