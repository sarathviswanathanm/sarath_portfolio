import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappUrl } from "../../contact";
import React, { useRef, useContext } from "react";
import linkedIn from "../../img/linkedin.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import resumePdf from "../../Sarath_Viswanathan_M.pdf";
import InteractiveBackground from "./InteractiveBackground";
import { trackEvent } from "../../analytics";

import "./Intro.css";

const emailUrl = `mailto:sarathviswanathanm@gmail.com?subject=${encodeURIComponent("Let’s connect — Portfolio enquiry")}&body=${encodeURIComponent("Hi Sarath,\n\nI came across your portfolio and would like to connect.\n\nBest regards,")}`;

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
						onClick={() => {
							trackEvent("Engagement", "resume_download", "CV PDF");
							window.open(resumePdf);
						}}
					>
						See Resume
					</button>
					<button
						className="button i-button"
						onClick={() => {
							trackEvent("Engagement", "contact_click", "Contact Me button");
							window.scrollTo(0, 100000);
						}}
					>
						Contact Me
					</button>
				</div>

				<div className="i-icons">
					<a
						href="https://www.linkedin.com/in/sarath-viswanathan-m-371517141/"
						target="_blank"
						rel="noreferrer"
						onClick={() => trackEvent("Engagement", "social_click", "LinkedIn")}
					>
						<img src={linkedIn} alt="LinkedIn" />
					</a>
					<a
						href={emailUrl}
						aria-label="Email Sarath"
						onClick={() => trackEvent("Engagement", "social_click", "Email")}
					>
						<EmailOutlinedIcon sx={{ fontSize: "90px", color: "#fca61f" }} />
					</a>
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Chat with Sarath on WhatsApp"
						onClick={() => trackEvent("Engagement", "social_click", "WhatsApp")}
					>
						<WhatsAppIcon sx={{ fontSize: "90px", color: "#fca61f" }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
