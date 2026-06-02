import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Headroom from "react-headroom";
import SarathIcon from "../../img/SarathIcon.jpg";
import "./Navbar.css";
import { trackEvent } from "../../analytics";

import StyleContext from "../../Context/StyleContext";

const pages = [
	{ name: "Stacks", href: "#stacks" },
	{ name: "Experience", href: "#experience" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Projects", href: "#projects" },
	{ name: "Education", href: "#education" },
	{ name: "Gallery", href: "#gallery" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const { isDark } = useContext(StyleContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Headroom>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-white ${
					isDark ? "dark-menu" : ""
				}`}
			>
				<div className="container-fluid">
					<a
						className="navbar-brand"
						href="#home"
						style={{ display: "flex", alignItems: "center" }}
					>
						<Avatar src={SarathIcon} alt="logo" sx={{ mr: 1.5 }} />
						<span className={`sarath ${isDark ? "lightColorText" : "darkColorText"}`}>
							Sarath
						</span>
					</a>

					<button
						className="navbar-toggler"
						type="button"
						aria-label="Toggle navigation"
						style={{ border: "none" }}
						onClick={() => setIsMenuOpen((prev) => !prev)}
					>
						<label className="hamburger">
							<span className={`line line-main ${isMenuOpen ? "open" : ""}`}></span>
							<span className={`line line-split ${isMenuOpen ? "open" : ""}`}></span>
						</label>
					</button>

					<div
						className={`navbar-collapse ${isMenuOpen ? "menu-open" : "menu-closed"}`}
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{pages.map((page) => (
								<li className="nav-item" key={page.name}>
									<a
										className={`menuItem nav-link ${
											isDark ? "lightColorText" : "darkColorText"
										}`}
										href={page.href}
										onClick={() => {
											trackEvent("Navigation", "section_click", page.name);
											closeMenu();
										}}
										style={{ fontFamily: "monospace", fontSize: "1.2rem" }}
									>
										{page.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</Headroom>
	);
};
export default Navbar;
