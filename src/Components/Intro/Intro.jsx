import React, { useRef, useContext } from "react";
import linkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import resumePdf from "../../Sarath_Viswanathan_M.pdf";
import InteractiveBackground from "./InteractiveBackground";

import "./Intro.css";

const Intro = () => {
	const { isDark } = useContext(StyleContext);
	const introRef = useRef(null);

	return (
		<div className="intro" id="home" ref={introRef}>
			<InteractiveBackground containerRef={introRef} isDark={isDark} />

			<div className="intro-content">
				<div
					className={`${isDark ? "lightColorText" : "darkColorText"} i-name`}
				>
					<span className="i-headline">
						Senior Frontend Engineer building{" "}
						<span className="i-highlight">
							high-performance web applications
						</span>
					</span>

					<span className="i-name-sub">Sarath Viswanathan M</span>

					<Fade left cascade>
						<p className="i-summary">
							I specialize in architecting complex, data-driven interfaces and
							turning heavy workflows into real-time, intuitive user
							experiences. Focused on performance, scalability, and clean
							frontend architecture.
						</p>
						<p className="i-impact">
							<strong>Reduced a 3-day workflow to 5 minutes</strong> with a
							real-time CAD system. Built a data visualization platform handling
							100k+ data points.
						</p>
					</Fade>
				</div>

				<div className="buttons">
					<button
						className="button i-button"
						onClick={() => window.open(resumePdf)}
					>
						See Resume
					</button>
					<button
						className="button i-button"
						onClick={() => window.scrollTo(0, 100000)}
					>
						Contact Me
					</button>
				</div>

				<div className="i-icons">
					<a
						href="https://www.linkedin.com/in/sarath-viswanathan-m-371517141/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedIn} alt="LinkedIn" />
					</a>
					<a
						href="https://www.instagram.com/sarath_mv/?hl=en"
						target="_blank"
						rel="noreferrer"
					>
						<img src={instagram} alt="Instagram" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
