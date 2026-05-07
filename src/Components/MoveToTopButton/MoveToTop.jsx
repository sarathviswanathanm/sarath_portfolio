import React from "react";
import { FiArrowUp } from "react-icons/fi";
import "./MoveToTop.css";

const MoveToTop = () => {
	window.onload = function () {
		scrollFunction();
	};
	function TopEvent() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
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
			className="movetotop"
			id="top"
			title="Go To Top"
			onClick={TopEvent}
		>
			<FiArrowUp />
		</button>
	);
};

export default MoveToTop;
