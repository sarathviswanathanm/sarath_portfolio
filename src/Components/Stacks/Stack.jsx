import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import "./Stack.css";
import { ReactComponent as ClaudeCodeIcon } from "../../img/stacks/claudecode.svg";
import { ReactComponent as CodexIcon } from "../../img/stacks/codex.svg";
import { ReactComponent as CursorIcon } from "../../img/stacks/cursor.svg";
import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaCode,
	FaNetworkWired,
	FaLock,
	FaGlobe,
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
	SiSentry,
	SiDatadog,
	SiGoogleanalytics,
	SiSass,
	SiStyledcomponents,
	SiJest,
	SiTestinglibrary,
	SiEslint,
	SiFigma,
	SiGoogletagmanager,
	SiNodedotjs,
	SiExpress,
	SiMysql,
	SiFirebase,
	SiLinux,
	SiRazorpay,
	SiOpenai,
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

	const c = "#fca61f";
	const stacks = [
		// Core frontend
		{ skillName: "React", icon: <FaReact color={c} /> },
		{ skillName: "TypeScript", icon: <SiTypescript color={c} /> },
		{ skillName: "JavaScript", icon: <SiJavascript color={c} /> },
		{ skillName: "HTML5", icon: <FaHtml5 color={c} /> },
		{ skillName: "CSS3", icon: <FaCss3Alt color={c} /> },
		{ skillName: "SCSS", icon: <SiSass color={c} /> },
		{ skillName: "Redux Toolkit", icon: <SiRedux color={c} /> },
		{ skillName: "React Context API", icon: <FaReact color={c} /> },
		{ skillName: "React Router", icon: <SiReactrouter color={c} /> },
		{ skillName: "RemixJS", icon: <FaReact color={c} /> },
		// Design systems & UI
		{ skillName: "Storybook", icon: <SiStorybook color={c} /> },
		{ skillName: "Chakra UI", icon: <SiChakraui color={c} /> },
		{ skillName: "styled-components", icon: <SiStyledcomponents color={c} /> },
		{ skillName: "Tailwind CSS", icon: <SiTailwindcss color={c} /> },
		{ skillName: "Fluent UI", icon: <SiMicrosoft color={c} /> },
		{ skillName: "Figma-to-Code", icon: <SiFigma color={c} /> },
		// APIs, real-time, auth & visualisation
		{ skillName: "Axios / REST", icon: <FaCode color={c} /> },
		{ skillName: "WebSockets", icon: <FaNetworkWired color={c} /> },
		{ skillName: "OAuth / SSO", icon: <FaLock color={c} /> },
		{ skillName: "i18n", icon: <FaGlobe color={c} /> },
		{ skillName: "Razorpay", icon: <SiRazorpay color={c} /> },
		{ skillName: "Three.js", icon: <SiThreedotjs color={c} /> },
		{ skillName: "TeamsJS", icon: <SiMicrosoftteams color={c} /> },
		// Testing & quality
		{ skillName: "Jest", icon: <SiJest color={c} /> },
		{ skillName: "React Testing Library", icon: <SiTestinglibrary color={c} /> },
		{ skillName: "Cypress", icon: <SiCypress color={c} /> },
		{ skillName: "ESLint", icon: <SiEslint color={c} /> },
		// Observability & analytics
		{ skillName: "Sentry", icon: <SiSentry color={c} /> },
		{ skillName: "Datadog RUM", icon: <SiDatadog color={c} /> },
		{ skillName: "GA4", icon: <SiGoogleanalytics color={c} /> },
		{ skillName: "Google Tag Manager", icon: <SiGoogletagmanager color={c} /> },
		// Tooling, backend & delivery
		{ skillName: "Vite", icon: <SiVite color={c} /> },
		{ skillName: "Webpack", icon: <SiWebpack color={c} /> },
		{ skillName: "Git", icon: <SiGit color={c} /> },
		{ skillName: "GitHub", icon: <SiGithub color={c} /> },
		{ skillName: "Firebase", icon: <SiFirebase color={c} /> },
		{ skillName: "Node.js", icon: <SiNodedotjs color={c} /> },
		{ skillName: "Express", icon: <SiExpress color={c} /> },
		{ skillName: "MySQL", icon: <SiMysql color={c} /> },
		{ skillName: "Linux", icon: <SiLinux color={c} /> },
		// AI
		{ skillName: "OpenAI API", icon: <SiOpenai color={c} /> },
		{ skillName: "Claude Code", icon: <ClaudeCodeIcon color={c} aria-hidden="true" /> },
		{ skillName: "Codex", icon: <CodexIcon color={c} aria-hidden="true" /> },
		{ skillName: "Cursor", icon: <CursorIcon color={c} aria-hidden="true" /> },
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
								Large-scale React and TypeScript SPAs, including nearly 4 years
								shaping frontend architecture for a multi-tenant SaaS platform
								serving 200+ manufacturer accounts
							</li>
							<li>
								State management with Redux Toolkit and Context API; routing
								with React Router and Remix; forms with Formik and Yup
							</li>
							<li>
								Company-wide design system with Storybook, Chakra UI and Vite
								across 4+ portals, plus Figma-to-code delivery and keyboard
								accessibility
							</li>
							<li>
								Performance standards: Core Web Vitals, code splitting, lazy
								loading, rendering optimisation and PWAs, holding initial load
								under 1.8s with Lighthouse 90+
							</li>
							<li>
								REST APIs, WebSockets and webhooks; OAuth, Google and Microsoft
								SSO, role-based access control, i18n, Frappe/ERPNext and
								Razorpay integrations
							</li>
							<li>
								Data visualisation with Three.js 3D/CAD, Recharts, Chart.js and
								React Table, with virtualisation for large datasets
							</li>
							<li>
								Quality and observability: Jest, React Testing Library, Cypress,
								cross-browser testing, Sentry, Datadog RUM, GA4, Google Tag
								Manager and A/B testing
							</li>
							<li>
								Delivery: CI/CD, Firebase (Google Cloud), Node.js/Express, MySQL,
								Linux, Microsoft Teams tab apps, Agile/Scrum and SAFe 5
							</li>
							<li>
								AI: built this portfolio&apos;s AI Assist chatbot with the OpenAI
								API and Firebase Cloud Functions; AI-assisted development with
								Cursor, Claude Code and Codex
							</li>
						</ul>
					</Fade>
				</div>
			</div>
		</Fade>
	);
};

export default Stack;
