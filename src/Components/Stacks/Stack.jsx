import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import "./Stack.css";
import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaCode,
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
	SiCypress,
	SiReactrouter,
	SiMicrosoft,
	SiMicrosoftteams,
	SiWebpack,
	SiGithub,

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
		{ skillName: "Cypress", icon: <SiCypress color="#fca61f" /> },
		{ skillName: "React Context API", icon: <FaReact color="#fca61f" /> },
		{ skillName: "RemixJS", icon: <FaReact color="#fca61f" /> },
		{ skillName: "React Router", icon: <SiReactrouter color="#fca61f" /> },
		{ skillName: "Fluent UI", icon: <SiMicrosoft color="#fca61f" /> },
		{ skillName: "TeamsJS", icon: <SiMicrosoftteams color="#fca61f" /> },
		{ skillName: "Axios", icon: <FaCode color="#fca61f" /> },
		{ skillName: "Webpack", icon: <SiWebpack color="#fca61f" /> },
		{ skillName: "GitHub", icon: <SiGithub color="#fca61f" /> },
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
								Testing with Cypress, Jest, and React Testing Library; REST API integration
								with Axios and Frappe
							</li>
							<li>
								Frontend and component architecture, design systems, Core Web
								Vitals, code splitting, lazy loading, and Progressive Web Apps
							</li>
							<li>
								Microsoft Teams Tab Apps with the Teams JavaScript SDK and Fluent UI
							</li>
							<li>
								CI/CD pipelines, Agile, SAFe 5, and clean coding practices
							</li>
						</ul>
					</Fade>
				</div>
			</div>
		</Fade>
	);
};

export default Stack;
