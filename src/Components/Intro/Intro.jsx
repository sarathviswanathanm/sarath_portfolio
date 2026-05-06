import React, { useContext } from "react";
import linkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import resumePdf from "../../Sarath_Viswanathan_M.pdf";

import "./Intro.css";

const Intro = () => {
	const { isDark } = useContext(StyleContext);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="intro" id="home">
				<div className="i-left">
					<div
						className={`${isDark ? "lightColorText" : "darkColorText"} i-name`}
					>
						<span>Hey!</span>
						<span>
							I am <span style={{ color: "var(--orange)" }}>Sarath</span>
						</span>

						<Fade left cascade>
							<p>
								Senior Frontend Engineer with 6 years of experience building
								scalable, high-performance web applications using React and
								TypeScript. I specialize in architecting complex, data-driven
								interfaces and turning heavy workflows into fast, intuitive user
								experiences. <br />
								I’ve led the development of systems that transform multi-step,
								time-intensive processes into real-time applications,
								significantly improving performance, reliability, and user
								engagement.
								<br />
								My focus areas include frontend architecture, performance
								optimization (Core Web Vitals), and building reusable design
								systems that help teams scale efficiently and ship with
								confidence.
							</p>
						</Fade>
					</div>

					<div className="buttons">
						<button
							className="button i-button"
							href="#contact"
							onClick={() => {
								window.scrollTo(0, 100000);
							}}
						>
							Contact Me
						</button>
						<button
							className="button i-button"
							onClick={() => {
								window.open(resumePdf);
							}}
						>
							See Resume
						</button>
					</div>

					<div className="i-icons">
						<a
							href="https://www.linkedin.com/in/sarath-viswanathan-m-371517141/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedIn} alt="" />
						</a>
						<a
							href="https://www.instagram.com/sarath_mv/?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<img src={instagram} alt="" />
						</a>
					</div>
				</div>

				{/* <div className="i_right">
					<Pulse>
						<div className="myPhotoDiv">
							<div className="photo">
								<img src={me} alt="" className="me" />
							</div>
						</div>
					</Pulse>
				</div> */}
			</div>
		</Fade>
	);
};

export default Intro;
