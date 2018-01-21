import React from "react";
import {
	parentsCourse as styles,
	parentsCourse
} from "./components/courseComponents/courseStyle";

const Aux = ({ children }) => {
	return (
		<div style={parentsCourse.parentCard}>
			<div style={parentsCourse.container}>{children}</div>
		</div>
	);
};

export default Aux;
