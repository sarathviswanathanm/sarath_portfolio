import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import Fade from "react-reveal/Fade";
import GL from "../../img/gl_logo.png";
import Karkhana from "../../img/Karkhana Logo.png";
import "./Experience.css";

const Experience = () => {
	const orgGL = useRef(null);
	const orgKK = useRef(null);
	useEffect(() => {
		[orgKK, orgGL].forEach((ref) => {
			Lottie.loadAnimation({
				container: ref.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				animationData: require("../../img/org.json"),
			});
		});
	}, []);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="experience" id="experience">
				<h3>My Career</h3>
				<div className="card" style={{ backgroundColor: "transparent" }}>
					{/* Karkhana */}
					<div className="card-body experience_body">
						<h5>Karkhana.io (Dashnode.ai) — Bengaluru</h5>
						<div className="role-progression">
							<span className="role-title">
								Senior Full Stack Developer (Frontend-Focused)
								<span className="role-badge">Promoted</span>
							</span>
							<span className="role-dates">Apr 2025 – Present</span>
							<span className="role-title">Frontend Software Developer</span>
							<span className="role-dates">Jul 2022 – Mar 2025</span>
						</div>
						<hr />
						<div className="experience_content">
							<div className="e-left">
								<div className="company_logo_karkhana">
									<img src={Karkhana} alt="Karkhana.io" />
								</div>
								<text className="company">Karkhana.io</text>
							</div>
							<div className="e-middile">
								<Fade left cascade>
									<ul className="experienceDesc">
										<li>
											Led frontend architecture for a real-time CAD costing
											engine (React, TypeScript, Three.js), scaling to handle{" "}
											<strong>10× model complexity</strong> over 12 months.
										</li>
										<li>
											Reduced customer quote turnaround from{" "}
											<strong>~3 days to under 5 minutes</strong> by
											architecting the end-to-end costing engine frontend.
										</li>
										<li>
											Built and scaled a company-wide design system (Chakra UI +
											Storybook), improving dev speed <strong>~40%</strong>{" "}
											across 4+ portals.
										</li>
										<li>
											Designed Redux Toolkit state architecture adopted across
											4+ portals, reducing production bugs by{" "}
											<strong>~60%</strong>.
										</li>
										<li>
											Improved performance (Core Web Vitals, code-splitting,
											lazy-loading), cutting load time to{" "}
											<strong>~1.8 s</strong> with 90+ Lighthouse scores.
										</li>
										<li>
											Delivered 4+ production portals, increasing engagement{" "}
											<strong>30%</strong> and onboarding{" "}
											<strong>200+ manufacturer accounts</strong>.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={orgKK}></div>
								<span className="time-span">Jul 2022 – Present</span>
							</div>
						</div>
					</div>
					{/* GlobalLogic */}
					<div className="card-body experience_body">
						<h5>GlobalLogic — Noida</h5>
						<div className="role-progression">
							<span className="role-title">Software Engineer</span>
							<span className="role-dates">Oct 2019 – Jan 2022</span>
						</div>
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
											Built 20+ reusable React components for a CSR dashboard,
											standardising UI patterns and cutting feature build time{" "}
											<strong>~25%</strong>.
										</li>
										<li>
											Delivered 3+ prototypes and POCs, shortening stakeholder
											feedback cycles from 2 weeks to under{" "}
											<strong>4 days</strong>.
										</li>
										<li>
											Modernised legacy VB6 modules with incremental React
											refactors, eliminating <strong>~30%</strong> of recurring
											production tickets with zero downtime.
										</li>
										<li>
											Owned deliverable tracking for a 12-person squad, lifting
											on-time release rate from ~70% to <strong>95%+</strong>.
										</li>
										<li>
											Cleared CI/CD bottlenecks, cutting deployment time{" "}
											<strong>~50%</strong> and shifting cadence from biweekly
											to weekly.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={orgGL}></div>
								<span className="time-span">Oct 2019 – Jan 2022</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Experience;
