import React, { Component } from "react";
import Course from "../../components/courseComponents/course";
import Aux from "../../aux";

class User extends Component {
	state = {
		enrolledCourse: []
	};
	render() {
		return (
			<Aux>
				<Course title="React" logo="react" author="Nou oudomkiry" />
			</Aux>
		);
	}
}

export default User;
