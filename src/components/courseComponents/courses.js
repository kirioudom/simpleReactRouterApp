import React, { Component } from "react";
import Radium from "radium";
import Course from "./course";
import Aux from "../../aux";
import { courseList } from "../../assets/data/data";
import { withRouter } from "react-router-dom";

class courses extends Component {
	render() {
		return (
			<Aux>
				{courseList.map(ele => {
					return (
						<Course
							key={ele.id}
							title={ele.title}
							author={ele.author}
							logo={ele.logo}
							id={ele.id}
						/>
					);
				})}
			</Aux>
		);
	}
}

export default withRouter(Radium(courses));
