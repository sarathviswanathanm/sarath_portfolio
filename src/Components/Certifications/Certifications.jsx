import React from "react";
import Fade from "react-reveal/Fade";
import webDevelopment from "../../img/certificates/WebDevelopment.jpeg";
import safe5 from "../../img/certificates/SAFe5.jpg";
import cleanCoding from "../../img/certificates/CleanCoding.jpg";
import webSecurity from "../../img/certificates/WebSecurity.jpg";

import "./Certifications.css";

const certification = [
	{
		name: "Web Development Bootcamp",
		image: webDevelopment,
		description:
			"The Complete 2022 Web Development Bootcamp - 65.5hrs(04/2022)",
	},
	{
		name: "SAFe5 Practitioner",
		image: safe5,
		description: "Certified SAFe® 5 Practitioner (10/2021)",
	},
	{
		name: "Clean Coding Practices",
		image: cleanCoding,
		description: "Agile Software Development: Clean Coding Practices (02/2021)",
	},
	{
		name: "Web Security",
		image: webSecurity,
		description: "Programming Foundations: Web Security (11/2020)",
	},
];

const Certifications = () => {
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="certifications" id="certifications">
				<h3>Certifications</h3>
				<div className="certificates">
					{certification.map((certificate) => (
						<Fade left key={certificate.name}>
							<div
								className="card customCard"
								onClick={() => {
									window.open(certificate.image);
								}}
							>
								<img src={certificate.image} alt="" />
								<div className="con-text">
									<h3>{certificate.name}</h3>
									<p>{certificate.description}</p>
								</div>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</Fade>
	);
};

export default Certifications;
