import React, { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fade from "react-reveal/Fade";

import images from "./Images.js";
import "./Gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
	const imagesArray = useMemo(() => images, []);
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="gallery" id="gallery">
				<h3>I Love Freezing the Moment </h3>
				{imagesArray && (
					<ImageGallery
						items={imagesArray}
						additionalClass="my-custom-gallery"
					/>
				)}
			</div>
		</Fade>
	);
};

export default Gallery;
