import React, { useRef, useEffect, useContext } from "react";
import Lottie from "lottie-web";
import Fade from "react-reveal/Fade";
import GL from "../../img/gl_logo.png";
import Karkhana from "../../img/Karkhana Logo.png";
import KarkhanaWhite from "../../img/Karkhana Logo White.png";
import StyleContext from "../../Context/StyleContext";
import "./Experience.css";

const Experience = () => {
	const { isDark } = useContext(StyleContext);
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
								Senior Full Stack Developer (Frontend Engineering)
								<span className="role-badge">Promoted</span>
							</span>
							<span className="role-dates">Apr 2025 – Jun 2026</span>
							<span className="role-title">Frontend Software Developer</span>
							<span className="role-dates">Jul 2022 – Mar 2025</span>
						</div>
						<hr />
						<div className="experience_content">
							<div className="e-left">
								<div className="company_logo_karkhana">
									<img src={isDark ? KarkhanaWhite : Karkhana} alt="Karkhana.io" />
								</div>
								<text className="company">Karkhana.io</text>
							</div>
							<div className="e-middile">
								<Fade left cascade>
									<ul className="experienceDesc">
										<li>
											Designed and solely built the frontend of the Automated
											Costing Engine (React, TypeScript, Redux, Three.js, Chakra
											UI), cutting quotation cycles from{" "}
											<strong>~3 days to under 5 minutes</strong>.
										</li>
										<li>
											Owned frontend architecture for the Costing Engine SPA,
											staying responsive as model complexity grew{" "}
											<strong>10×</strong> in a year.
										</li>
										<li>
											Scaled the company-wide React design system (Chakra UI,
											Storybook, Vite) across 4+ portals, setting coding
											standards and cutting UI build time by{" "}
											<strong>~40%</strong>.
										</li>
										<li>
											Shipped 4+ production portals in 12 months on a
											multi-tenant SaaS platform (React, Remix, TypeScript),
											driving <strong>30%</strong> higher engagement and
											onboarding <strong>200+ manufacturer accounts</strong>.
										</li>
										<li>
											Designed the Redux Toolkit state architecture adopted
											across 4+ portals, reducing state-related production
											defects by <strong>~60%</strong>.
										</li>
										<li>
											Integrated 60+ REST API endpoints with TypeScript and
											Axios, reducing QA-reported integration defects by{" "}
											<strong>~50%</strong>.
										</li>
										<li>
											Set performance standards (Core Web Vitals, code
											splitting, lazy loading), holding initial load under{" "}
											<strong>1.8s</strong> and Lighthouse above{" "}
											<strong>90</strong>.
										</li>
										<li>
											Delivered 3–5 production features per quarter end to
											end, from technical design through release, with under{" "}
											<strong>2%</strong> post-release defects.
										</li>
										<li>
											Built OAuth and SSO (Google, Microsoft) with role-based
											access control, i18n, and real-time dashboards
											(WebSockets, Recharts, React Table) with drill-downs and
											CSV/Excel export.
										</li>
										<li>
											Mentored interns, led code reviews, wrote technical
											design docs and owned production reliability on the
											on-call rotation with Sentry and Datadog RUM.
										</li>
										<li>
											Partnered with product, design and backend teams through
											discovery workshops and backlog prioritisation; presented
											the product to the CEO and live at{" "}
											<strong>IMTEX 2025</strong>.
										</li>
									</ul>
								</Fade>
							</div>
							<div className="e-right">
								<div className="org" ref={orgKK}></div>
								<span className="time-span">Jul 2022 – Jun 2026</span>
							</div>
						</div>
					</div>
					{/* GlobalLogic */}
					<div className="card-body experience_body">
						<h5>GlobalLogic — Noida</h5>
						<div className="role-progression">
							<span className="role-title">
									Software Engineer
									<span className="role-badge">Promoted from Trainee</span>
								</span>
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
											Built 20+ reusable React components for an enterprise CSR
											dashboard, standardising UI across 3 squads and cutting
											feature development time by <strong>~25%</strong>.
										</li>
										<li>
											Modernised legacy VB6/VB.NET modules through incremental
											migration to React, reducing recurring production issues
											by <strong>~30%</strong> with no business disruption.
										</li>
										<li>
											Delivered 3+ React/Node.js prototypes, including a
											geographic mapping interface with custom markers, cutting
											feedback cycles from 2 weeks to under{" "}
											<strong>4 days</strong>.
										</li>
										<li>
											Coordinated delivery for a 12-person Agile squad, raising
											on-time releases from ~70% to <strong>95%+</strong> over 8
											sprints.
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
