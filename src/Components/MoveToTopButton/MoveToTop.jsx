import React from "react";
import "./MoveToTop.css";

const MoveToTop = () => {
	window.onload = function () {
		scrollFunction();
	};
	function TopEvent() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	window.onscroll = function () {
		scrollFunction();
	};
	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			document.getElementById("top").style.visibility = "visible";
		} else {
			document.getElementById("top").style.visibility = "hidden";
		}
	}
	return (
		<button
			className="movetotop button"
			id="top"
			title="Go To Top"
			onClick={TopEvent}
		>
			<i className="far fa-hand-point-up" aria-hidden="true"></i>
		</button>
	);
};

export default MoveToTop;
