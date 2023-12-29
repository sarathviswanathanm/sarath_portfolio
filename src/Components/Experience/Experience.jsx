import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import Fade from "react-reveal/Fade";
import GL from "../../img/gl_logo.png";
import KKonnect from "../../img/Kkonnect1.png";
import "./Experience.css";

const Experience = () => {
	const org = useRef(null);
	const org1 = useRef(null);
	useEffect(() => {
		Lottie.loadAnimation({
			container: org.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/org.json"),
		});
		Lottie.loadAnimation({
			container: org1.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/org.json"),
		});
	}, []);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="experience" id="experience">
				<h3>My Career</h3>
				<div className="card" style={{ backgroundColor: "transparent" }}>
					<div className="card-body experience_body">
						<h5>Frontend Software Developer</h5>
						<hr />
						<div className="experience_content">
							<div className="e-left">
								<div className="company_logo_karkhana">
									<img src={KKonnect} alt="" />
								</div>
								<text className="company">Karkhana</text>
							</div>
							<div className="e-middile">
								<Fade left cascade>
									<ul className="experienceDesc">
										<li>
											Developed multiple portals for both customers and
											suppliers to make digital manufacturing process easy.
										</li>
										<li>
											Delivered projects on time, following agile development
											methodologies (completed 4 portals in last 1 year).
										</li>
										<li>
											Executed comprehensive testing procedures, identifying and
											resolving software bugs promptly to ensure stability
											across range of devices and browsers.
										</li>
										<li>
											Worked closely with back-end developers for seamless
											integration of front-end and back-end systems, and also
											performed some basic back-end tasks in Frappe framework.
										</li>
										<li>
											Collaborated with UI/UX designers and product team to
											match visual design intent.
										</li>
										<li>Implemented state-management using Redux.</li>
										<li>
											Created reusable UI component library using ReactTS,
											RemixJs, ChakraUI, and maintained Storybook.
										</li>
										<li>
											Utilized version control systems to manage and track
											changes in codebase.
										</li>
										<li>
											Optimized webpages for maximum speed and scalability.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={org1}></div>
								<span className="time-span">July 2022 - Current</span>
							</div>
						</div>
					</div>
					{/* ---------------------------------------------------------------------------------------- */}
					<div className="card-body experience_body">
						<h5>Software Engineer</h5>
						<hr />
						<div className="experience_content">
							<div className="e-left">
								<div className="company_logo">
									<img src={GL} alt="" />
									<span className="company">GlobalLogic</span>
								</div>
							</div>
							<div className="e-middile">
								<Fade left cascade>
									<ul className="experienceDesc">
										<li>
											Adapted to different languages and technologies based on
											project requirements.
										</li>
										<li>
											Collaborated with team members to create system analysis
											for applications based on client requirements.
										</li>
										<li>
											Developed software prototypes, enabling efficient testing
											and feedback.
										</li>
										<li>
											Developed Web UI Components using ReactJS for Admin
											Dashboard system, which provides all critical information
											about CSR activities and their expenditure, and helps in
											tracking and managing financial budgets.
										</li>
										<li>Prepared POCs in React, Node, and VB6.</li>
										<li>
											Worked on VB6 legacy code for Insurance Decision portal as
											full-stack developer
										</li>
										<li>
											Became point of contact for certain project deliverable
											workflow activities.
										</li>
										<li>
											Collaborated with DevOps team to identify and fix issues
											in deployment of project.
										</li>
										<li>
											Worked cross-functionally to address complex challenges in
											product development.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={org}></div>
								<span className="time-span">Oct 2019 - Jan 2022</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Experience;
