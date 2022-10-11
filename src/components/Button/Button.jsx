import React from "react";
import "./button.css";

function Button(props) {
	return <button {...props} className={"button " + props.className} />;
}

export default Button;
