export const parentsCourse = {
	parentCard: {
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: "45px"
	},
	container: {
		width: "90%",
		display: "flex",
		alignItem: "center",
		flexFlow: "row wrap",
		justifyContent: "center",
		"@media (max-width:400px)": {
			minWidth: "90%"
		}
	}
};

export const childCourse = {
	course: {
		display: "flex",
		flexFlow: "row wrap",
		marginLeft: "3.3333%",
		marginTop: "15px",
		borderRadius: "5px",
		width: "21%",
		flex: "0 0 auto",
		padding: "10px 10px",
		boxShadow: "0px 0px 10px grey",
		transition: "box-shadow .5s ease-in-out",
		":hover": {
			boxShadow: "0 0 50px black"
		},
		"@media (max-width: 841px) and (min-width: 401px)": {
			width: "33.33%"
		},
		"@media (max-width: 400px)": {
			display: "flex",
			width: "90%"
		},
		courseLogo: {
			maxWidth: "100%"
		}
	},
	button: {
		backgroundColor: "#4077ce",
		marginTop: "15px",
		fontSize: "16px",
		textAlign: "center",
		display: "inline-block",
		padding: "10px 10px",
		borderRadius: "5px",
		color: "white",
		width: "100%",
		border: "0",
		":hover": {
			boxShadow: "0px 0px 5px #70a1ef"
		}
	}
};
