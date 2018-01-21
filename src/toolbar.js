import React from "react";
import { NavLink } from "react-router-dom";
import "./toolbar.css";
const toolbar = props => {
	return (
		<header className="header">
			<nav className="navbar">
				<ul className="listItems">
					<li>
						<NavLink to="/user">User</NavLink>
					</li>
					<li>
						<NavLink to="/course">Course</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default toolbar;
