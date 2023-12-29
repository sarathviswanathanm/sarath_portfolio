import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Fade from "react-reveal/Fade";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer" id="contact">
			<h3>Contact Me</h3>
			<Fade left>
				<div className="email">
					<a
						className="contact_detail"
						href={"mailto:sarathviswnathanm@gmail.com"}
						style={{ wordBreak: "break-all" }}
					>
						<EmailIcon style={{ marginRight: "5px" }} />{" "}
						sarathviswnathanm@gmail.com
					</a>
				</div>
				<div className="phone">
					<a className="contact_detail" href={"tel:" + 9526335398}>
						<CallIcon style={{ marginRight: "5px" }} /> 9526335398
					</a>
				</div>
				<div className="socialMedia">
					<span className="socialMediaIcons">
						<a
							href="https://www.linkedin.com/in/sarath-viswanathan-m-371517141/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon sx={{ fontSize: "3rem" }} />
						</a>
						<a
							href="https://github.com/sarathviswanathanm"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon sx={{ fontSize: "3rem" }} />
						</a>
						<a
							href="https://www.instagram.com/sarath_mv/?hl=en"
							target="_blank"
							rel="noreferrer"
						>
							<InstagramIcon sx={{ fontSize: "3rem" }} />
						</a>
					</span>
				</div>

				<div className="myName">
					<span>
						<CopyrightIcon /> Sarath
					</span>
				</div>
			</Fade>
		</div>
	);
};

export default Footer;
