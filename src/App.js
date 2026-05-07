import React, { useState, useEffect, Suspense } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";

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
	const [isDark, setIsDark] = useState(true);
	const [loading, setLoading] = useState(false);
	const changeTheme = () => {
		const next = !isDark;
		setIsDark(next);
		localStorage.setItem("isDark", String(next));
	};
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1200);
		const stored = localStorage.getItem("isDark");
		if (stored !== null) {
			setIsDark(stored === "true");
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
							<Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
								<button
									type="button"
									className="button settingsButton"
									onClick={changeTheme}
									aria-label="Toggle theme"
								>
									{isDark ? <FiSun fontSize="1.4rem" /> : <FiMoon fontSize="1.4rem" />}
								</button>
							</Tooltip>
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
