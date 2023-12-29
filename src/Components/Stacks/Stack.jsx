import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import "./Stack.css";
import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaNpm,
	FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiFirebase } from "react-icons/si";

const Stack = () => {
	const { isDark } = useContext(StyleContext);
	const s_left = useRef(null);
	useEffect(() => {
		Lottie.loadAnimation({
			container: s_left.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/intro.json"),
		});
	}, []);

	const stacks = [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5",
			icon: <FaHtml5 color="#fca61f" />,
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt",
			icon: <FaCss3Alt color="#fca61f" />,
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "fab fa-ts",
			icon: <SiTypescript color="#fca61f" />,
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
			icon: <SiJavascript color="#fca61f" />,
		},
		{
			skillName: "ReactJS",
			fontAwesomeClassname: "fab fa-react",
			icon: <FaReact color="#fca61f" />,
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node",
			icon: <FaNodeJs color="#fca61f" />,
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm",
			icon: <FaNpm color="#fca61f" />,
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "fas fa-database",
			icon: <FaDatabase color="#fca61f" />,
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire",
			icon: <SiFirebase color="#fca61f" />,
		},
	];
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="stack" id="stacks">
				<div className="s_left" ref={s_left}></div>
				<div
					className={`s_right ${isDark ? "lightColorText" : "darkColorText"}`}
				>
					<h3>My Ecosystem</h3>
					<hr />
					<Fade left>
						<ul className="icons">
							{stacks.map((item) => {
								return (
									<li className="icon" key={item.skillName}>
										{item.icon}
										{/* <i className={`${item.fontAwesomeClassname}`}></i> */}
										<p>{item.skillName}</p>
									</li>
								);
							})}
						</ul>
						<ul className="stackDesc">
							<li>
								Developed Web application using React in JS,TS and SCSS/ChakraUI
							</li>
							<li>Completed POC in NodeJS</li>
							<li>Worked on SQL Database with .NET framework</li>
							<li>Developed web application using RemixJs and ChakraUI</li>
						</ul>
					</Fade>
				</div>
			</div>
		</Fade>
	);
};

export default Stack;
