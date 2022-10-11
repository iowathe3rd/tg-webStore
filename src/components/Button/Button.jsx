import React from "react";
import "./button.css";

function Button(props) {
	<button {...props} className={"button " + props.className} />;
}

export default Button;
