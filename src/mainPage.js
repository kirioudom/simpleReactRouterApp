import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Courses from "./components/courseComponents/courses";
import User from "./containers/userPage/user";
import Toolbar from "./toolbar";
//import { parentsCourse as styles } from "./components/courseComponents/courseStyle";
import courseInfo from "./components/courseComponents/courseInfo";

const stylesMain = {
	width: "100%",
	display: "flex",
	justifyContent: "center",
	marginTop: "5%",
	marginBottom: "40px"
};
class mainPage extends Component {
	render() {
		return (
			<div>
				<Toolbar />
				<main style={stylesMain}>
					<Switch>
						<Route path="/course/:id" component={courseInfo} />
						<Route path="/home" component={props => <div>Hello</div>} />
						<Route path="/course" component={Courses} />
						<Route path="/user" component={User} />
						<Redirect exact from="/" to="/home" />
						<Redirect from="*" to="/error" />
					</Switch>
				</main>
			</div>
		);
	}
}

export default mainPage;
