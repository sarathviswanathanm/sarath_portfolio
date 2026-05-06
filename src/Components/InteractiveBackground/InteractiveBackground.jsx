import Particles from "react-tsparticles";
import React from "react";
import "./styles.module.css";

export const InteractiveBackground = () => {
	return (
		<Particles
			id="tsparticles"
			options={{
				autoPlay: true,
				background: {
					color: {
						value: "transparent",
					},
					image: "",
					position: "100% 50%",
					repeat: "no-repeat",
					size: "cover",
					opacity: 1,
				},
				fullScreen: {
					enable: false,
				},
				backgroundMask: {
					composite: "destination-out",
					cover: {
						color: {
							value: "#fff",
						},
						opacity: 1,
					},
					enable: false,
				},
				backgroundMode: {
					enable: false,
					zIndex: -1,
				},
				detectRetina: true,
				fpsLimit: 60,
				infection: {
					cure: true,
					delay: 0,
					enable: false,
					infections: 0,
					stages: [],
				},
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "attract",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 1,
						},
						attract: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						color: "#ffffff",
						distance: 100,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						value: 0.2,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
			}}
		/>
	);
};
