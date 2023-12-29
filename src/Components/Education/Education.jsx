import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import Fade from "react-reveal/Fade";
import StyleContext from "../../Context/StyleContext";
import GECW from "../../img/GECW_logo.png";
import JNV from "../../img/JNV.png";
import "./Education.css";

const Education = () => {
	const { isDark } = useContext(StyleContext);
	const college = useRef(null);
	useEffect(() => {
		Lottie.loadAnimation({
			container: college.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../img/Education.json"),
		});
	}, []);
	const Edu = [
		{
			logo: GECW,
			degree: "B.Tech Computer Science & Engineering",
			institution: "Government Engineering College, Wayanad",
			board: "APJ Abdul Kalam Kerala Technological University",
			year: "08/2015 - 07/2019",
			mark: "CGPA - 7.27",
		},
		{
			logo: JNV,
			degree: "Higher Secondary - Plus Two",
			institution: "Jawahar Navodaya Vidyalaya, Mahe",
			board: "CBSE",
			year: "06/2014 - 03/2015",
			mark: "79%",
		},
	];
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="education" id="education">
				<div className="backgroundAnimationContainer">
					<div
						ref={college}
						className="backgroundAnimation"
						style={{ opacity: isDark ? "0.03" : "0.1" }}
					></div>
				</div>
				<h3>Education</h3>
				{Edu.map((item) => (
					<div className="card educationCard" key={item.degree}>
						<Fade left>
							<div className="card-body education_body">
								<div className="education_left">
									<img src={item.logo} alt="" />
								</div>
								<div className="education_right">
									<h5>{item.degree}</h5>
									<h6>{item.institution}</h6>
									<h6>{item.board}</h6>
									<div className="subsection">
										<span>{item.year}</span>
										<span>{item.mark}</span>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				))}
			</div>
		</Fade>
	);
};

export default Education;
