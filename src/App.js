import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StyleRoot } from "radium";
import "./App.css";
import MainPage from "./mainPage";

class App extends Component {
	render() {
		return (
			<StyleRoot>
				<BrowserRouter>
					<div className="App">
						<Switch>
							<Route
								path="/error"
								render={() => <h1>Error 404: Page not Found</h1>}
							/>
							<MainPage />
						</Switch>
					</div>
				</BrowserRouter>
			</StyleRoot>
		);
	}
}

export default App;
