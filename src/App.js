import React, { useState, useEffect, Suspense } from "react";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineCancel } from "react-icons/md";

import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Stack from "./Components/Stacks/Stack";
import { StyleProvider } from "./Context/StyleContext";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import MoveToTop from "./Components/MoveToTopButton/MoveToTop";
import Certifications from "./Components/Certifications/Certifications";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

const App = () => {
	const [isDark, setIsDark] = useState(false);
	const [loading, setLoading] = useState(false);
	const changeTheme = () => {
		setIsDark(!isDark);
		localStorage.setItem("isDark", isDark);
	};
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		if (localStorage.getItem("isDark")) {
			setIsDark(localStorage.getItem("isDark"));
		}
	}, []);
	return (
		<Suspense fallback={<Loader />}>
			{loading ? (
				<Loader />
			) : (
				<StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
					<div className={isDark ? "dark-mode App" : "App"}>
						<div className="settings">
							<Tooltip title="Change theme">
								<button
									data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasRight"
									aria-controls="offcanvasRight"
									type="button"
									className="button settingsButton"
								>
									<FiSettings fontSize="2rem" />
								</button>
							</Tooltip>
						</div>
						<div
							className={`offcanvas offcanvas-end ${
								isDark ? "lightColorText" : "darkColorText"
							}`}
							tabIndex="-1"
							id="offcanvasRight"
							aria-labelledby="offcanvasRightLabel"
							style={{
								backgroundColor: isDark ? "var(--darkBackgroundSecondary)" : "",
							}}
						>
							<div className="offcanvas-header">
								<h2 id="offcanvasRightLabel">Settings</h2>
								<button
									type="button"
									className="text-reset"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
									style={{
										borderRadius: "50%",
										border: "none",
										backgroundColor: "transparent",
									}}
								>
									<MdOutlineCancel fontSize="2rem" color="var(--orange)" />
								</button>
							</div>
							<hr />
							<div className="offcanvas-body">
								<h3 className="themeHeading">Theme Options</h3>
								<div className="mt-4">
									<input
										type="radio"
										id="light"
										name="theme"
										value="Light"
										className="cursor-pointer"
										data-bs-dismiss="offcanvas"
										onChange={() => {
											changeTheme();
										}}
										checked={!isDark}
									/>
									<label htmlFor="light" className="themeName">
										Light
									</label>
								</div>

								<div className="mt-4">
									<input
										type="radio"
										id="dark"
										name="theme"
										value="Dark"
										className="cursor-pointer"
										data-bs-dismiss="offcanvas"
										onChange={() => {
											changeTheme();
										}}
										checked={isDark}
									/>
									<label htmlFor="dark" className="themeName">
										Dark
									</label>
								</div>
							</div>
						</div>
						<Navbar />
						<Intro />
						<Stack />
						<Experience />
						<Certifications />
						<Projects />
						<Education />
						<Gallery />
						<Footer />
					</div>
					<MoveToTop />
				</StyleProvider>
			)}
		</Suspense>
	);
};

export default App;
