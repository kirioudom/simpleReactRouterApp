import React from "react";
import Radium from "radium";
import { childCourse } from "./courseStyle";
import { Link, withRouter } from "react-router-dom";
import { checkImg } from "../../assets/util/util";

const course = ({ title, author, logo, match, id, history }) => {
	return (
		<div
			style={childCourse.course}
			onClick={() => history.push(`${match.url}/${id}`)}
		>
			<h4 style={{ margin: "0", padding: "5px 0", width: "100%" }}>{title}</h4>
			<img style={childCourse.courseLogo} src={checkImg(logo)} alt="react" />
			<p
				style={{
					margin: "0",
					padding: "5px 0",
					width: "100%"
				}}
			>
				Author:{author}
			</p>
			<button key="1" style={childCourse.button}>
				<Link to={`/login`}>Enroll</Link>
			</button>
		</div>
	);
};

export default withRouter(Radium(course));
