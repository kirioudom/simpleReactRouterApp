import reduxLogo from "../../assets/image/redux.png";
import reactLogo from "../../assets/image/react.png";
import vueLogo from "../../assets/image/vue.png";
import nodeLogo from "../../assets/image/node.png";

export function checkImg(logo) {
	let image = null;
	switch (logo) {
		case "redux":
			image = reduxLogo;
			break;
		case "react":
			image = reactLogo;
			break;
		case "vue":
			image = vueLogo;
			break;
		case "node":
			image = nodeLogo;
			break;
		default:
			image = null;
	}
	return image;
}
