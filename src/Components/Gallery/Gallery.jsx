import React, { useMemo, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import { BsGrid3X3Gap, BsPlayCircle } from "react-icons/bs";

import images from "./Images.js";
import "./Gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const getGridUrl = (url) => {
	// Inject ImageKit width transform to avoid loading multi-MB originals in the grid
	if (url.includes("/tr:")) {
		return url.replace("/tr:", "/tr:w-800,");
	}
	return url.replace("ik.imagekit.io/5yc2yhl2a/", "ik.imagekit.io/5yc2yhl2a/tr:w-800/");
};

const Gallery = () => {
	const imagesArray = useMemo(() => images, []);
	const [viewMode, setViewMode] = useState("slider");
	const [startIndex, setStartIndex] = useState(0);
	const galleryRef = useRef(null);

	const handleGridImageClick = (index) => {
		setStartIndex(index);
		setViewMode("slider");
		setTimeout(() => {
			galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
		}, 50);
	};

	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="gallery" id="gallery" ref={galleryRef}>
				<div className="gallery-header">
					<h3>I Love Freezing the Moment</h3>
					<div className="gallery-view-toggle">
						<button
							className={`view-toggle-btn ${viewMode === "slider" ? "active" : ""}`}
							onClick={() => setViewMode("slider")}
							title="Slideshow"
						>
							<BsPlayCircle />
						</button>
						<button
							className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
							onClick={() => setViewMode("grid")}
							title="Grid"
						>
							<BsGrid3X3Gap />
						</button>
					</div>
				</div>

				{viewMode === "slider" ? (
					<ImageGallery
						items={imagesArray}
						additionalClass="my-custom-gallery"
						startIndex={startIndex}
					/>
				) : (
					<div className="gallery-grid">
						{imagesArray.map((img, index) => (
							<div
								key={index}
								className="gallery-grid-item"
								onClick={() => handleGridImageClick(index)}
							>
								<img
									src={getGridUrl(img.original)}
									alt={`photo-${index + 1}`}
									loading="lazy"
									onError={(e) => {
										e.target.parentElement.style.display = "none";
									}}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</Fade>
	);
};

export default Gallery;
