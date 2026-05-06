import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import "./Stack.css";
import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
} from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiRedux,
	SiThreedotjs,
	SiChakraui,
	SiTailwindcss,
	SiVite,
	SiStorybook,
	SiGit,
	SiJest,
	SiCypress,
} from "react-icons/si";

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
		{ skillName: "HTML5", icon: <FaHtml5 color="#fca61f" /> },
		{ skillName: "CSS3", icon: <FaCss3Alt color="#fca61f" /> },
		{ skillName: "TypeScript", icon: <SiTypescript color="#fca61f" /> },
		{ skillName: "JavaScript", icon: <SiJavascript color="#fca61f" /> },
		{ skillName: "React", icon: <FaReact color="#fca61f" /> },
		{ skillName: "Redux Toolkit", icon: <SiRedux color="#fca61f" /> },
		{ skillName: "Three.js", icon: <SiThreedotjs color="#fca61f" /> },
		{ skillName: "Chakra UI", icon: <SiChakraui color="#fca61f" /> },
		{ skillName: "Tailwind CSS", icon: <SiTailwindcss color="#fca61f" /> },
		{ skillName: "Vite", icon: <SiVite color="#fca61f" /> },
		{ skillName: "Storybook", icon: <SiStorybook color="#fca61f" /> },
		{ skillName: "Git", icon: <SiGit color="#fca61f" /> },
		{ skillName: "Jest", icon: <SiJest color="#fca61f" /> },
		{ skillName: "Cypress", icon: <SiCypress color="#fca61f" /> },
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
										<p>{item.skillName}</p>
									</li>
								);
							})}
						</ul>
						<ul className="stackDesc">
							<li>
								Built production apps with React, TypeScript, Redux Toolkit,
								and Chakra UI / Tailwind CSS
							</li>
							<li>
								Real-time 3D CAD rendering with Three.js in a manufacturing
								costing engine
							</li>
							<li>
								Developed and maintained company-wide design system with
								Storybook and Vite
							</li>
							<li>
								End-to-end testing with Cypress and Jest; REST API integration
								with Axios and Frappe
							</li>
						</ul>
					</Fade>
				</div>
			</div>
		</Fade>
	);
};

export default Stack;
