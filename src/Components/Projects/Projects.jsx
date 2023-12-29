import React from "react";
import weather from "../../img/projects/Weather.png";
import adminDashBoard from "../../img/projects/AdminDashBoard.png";
import amazon from "../../img/projects/AmazonClone.png";
import portfolio from "../../img/projects/Portfolio.png";
import Fade from "react-reveal/Fade";

import "./Projects.css";

const projects = [
	{
		title: "Weather Application",
		image: weather,
		description:
			"Live search of city's current weather with daily and hourly forecast",
		site: "https://weather-openweathermap-20283.web.app/",
	},
	{
		title: "Admin Dashboard",
		image: adminDashBoard,
		description:
			"Admin dashboard with various charts for data representations, data tables, apps like Calendar schedule, Kanban board, WYSIWYG Editor, and Colour Picker.",
		site: "https://admin-dashboard-65ccf.web.app/",
	},
	{
		title: "Amazon Clone",
		image: amazon,
		description:
			"Clone of Amazon India website with home page, products list page, product detail page, and cart items page. SignUp/SignIn functionality also included. ",
		site: "https://clone-174b0.web.app/",
	},
	{
		title: "Personal Portfolio",
		image: portfolio,
		description: "My own portfolio created using ReactJS",
		site: "https://sarath-viswanathan-m.web.app/",
	},
];
const Projects = () => {
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="projects" id="projects">
				<h3>Personal Projects</h3>
				<div className="project">
					{projects.map((project) => (
						<Fade left key={project.title}>
							<div
								className="card customCard"
								onClick={() => {
									window.open(project.site);
								}}
							>
								<img src={project.image} alt="" />
								<div className="con-text">
									<h3>{project.title}</h3>
									<p>{project.description}</p>
								</div>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</Fade>
	);
};

export default Projects;
