import React from "react";
import radium from "radium";
import reduxLogo from "../../assets/image/redux.png";
import withRouter from "react-router-dom/withRouter";
import CourseList, { courseList } from "../../assets/data/data";
import { checkImg } from "../../assets/util/util";
import course from "./course";

const style = {
	flexContainer: {
		width: "80%",
		display: "flex",
		flexFlow: "row wrap",
		padding: "10px 20px"
	},
	headerItem: {
		display: "flex",
		justifyContent: "center"
	},
	imgContainer: {
		maxWidth: "100%"
	},
	logo: {
		maxWidth: "100%"
	},
	infoHeader: {
		width: "100%",
		display: "flex",
		justifyContent: "center"
	},
	button: {
		width: "150px",
		fontSize: "16px",
		padding: "10px 10px",
		color: "white",
		backgroundColor: "#7a4999",
		border: "none",
		":hover": {
			boxShadow: "0 0 5px grey"
		}
	}
};

const courseInfo = ({ match }) => {
	let courseDetail = Object(
		courseList.filter(course => course.id === parseInt(match.params.id, 10))[0]
	);
	let { title, logo, author } = courseDetail;
	return (
		<div style={style.flexContainer}>
			<header style={style.headerItem}>
				<div style={style.infoHeader}>
					<div style={style.imgContainer}>
						<img src={checkImg(logo)} alt="reduxlogo" style={style.logo} />
					</div>
					<div>
						<h1>{title}</h1>
						<h3>{author}</h3>
						<button style={style.button}>Enroll</button>
					</div>
				</div>
			</header>
			<main>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
					duis ultricies lacus sed turpis tincidunt id aliquet risus. Duis at
					consectetur lorem donec massa sapien faucibus et molestie. Egestas
					quis ipsum suspendisse ultrices gravida dictum fusce. Consequat ac
					felis donec et odio pellentesque diam volutpat. Faucibus vitae aliquet
					nec ullamcorper sit amet risus nullam. Ullamcorper velit sed
					ullamcorper morbi tincidunt ornare massa. Enim ut sem viverra aliquet
					eget sit amet tellus cras. Sit amet porttitor eget dolor{" "}
				</p>
			</main>
		</div>
	);
};

export default withRouter(radium(courseInfo));
