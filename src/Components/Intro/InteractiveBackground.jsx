import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 70;
const MAX_DIST = 120;
const MOUSE_DIST = 150;
const MAX_SPEED = 1.2;

const DARK_COLOR = "252, 166, 31"; // --orange
const LIGHT_COLOR = "36, 45, 73"; // --black (#242d49)

class Particle {
	constructor(w, h) {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.vx = (Math.random() - 0.5) * 0.5;
		this.vy = (Math.random() - 0.5) * 0.5;
		this.radius = Math.random() * 1.5 + 0.8;
	}

	update(w, h, mouse) {
		if (mouse.x !== null) {
			const dx = mouse.x - this.x;
			const dy = mouse.y - this.y;
			const dist = Math.hypot(dx, dy);
			if (dist < MOUSE_DIST) {
				this.vx += (dx / dist) * 0.025;
				this.vy += (dy / dist) * 0.025;
			}
		}
		const speed = Math.hypot(this.vx, this.vy);
		if (speed > MAX_SPEED) {
			this.vx = (this.vx / speed) * MAX_SPEED;
			this.vy = (this.vy / speed) * MAX_SPEED;
		}
		this.x += this.vx;
		this.y += this.vy;
		if (this.x < 0) this.x = w;
		if (this.x > w) this.x = 0;
		if (this.y < 0) this.y = h;
		if (this.y > h) this.y = 0;
	}

	draw(ctx, rgb, alpha) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
		ctx.fill();
	}
}

const InteractiveBackground = ({ containerRef, isDark }) => {
	const canvasRef = useRef(null);
	const isDarkRef = useRef(isDark);

	useEffect(() => {
		isDarkRef.current = isDark;
	}, [isDark]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const container = containerRef?.current || canvas.parentElement;
		const ctx = canvas.getContext("2d");
		let animationId;
		const mouse = { x: null, y: null };
		let particles = [];

		const resize = () => {
			canvas.width = container.offsetWidth;
			canvas.height = container.offsetHeight;
			particles = Array.from(
				{ length: PARTICLE_COUNT },
				() => new Particle(canvas.width, canvas.height),
			);
		};

		resize();

		const ro = new ResizeObserver(resize);
		ro.observe(container);

		// Track on window so the canvas never needs pointer events,
		// keeping all child buttons/links fully clickable.
		const onMouseMove = (e) => {
			const rect = container.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
				mouse.x = x;
				mouse.y = y;
			} else {
				mouse.x = null;
				mouse.y = null;
			}
		};

		window.addEventListener("mousemove", onMouseMove);

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const dark = isDarkRef.current;
			const rgb = dark ? DARK_COLOR : LIGHT_COLOR;
			// Light mode: particles are very faint so they don't compete with text
			const o = dark ? 1 : 0.42;

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.update(canvas.width, canvas.height, mouse);
				p.draw(ctx, rgb, 0.7 * o);

				for (let j = i + 1; j < particles.length; j++) {
					const q = particles[j];
					const dist = Math.hypot(p.x - q.x, p.y - q.y);
					if (dist < MAX_DIST) {
						ctx.beginPath();
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(q.x, q.y);
						ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / MAX_DIST) * 0.4 * o})`;
						ctx.lineWidth = 0.6;
						ctx.stroke();
					}
				}

				if (mouse.x !== null) {
					const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
					if (dist < MOUSE_DIST) {
						ctx.beginPath();
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(mouse.x, mouse.y);
						ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / MOUSE_DIST) * 0.65 * o})`;
						ctx.lineWidth = 0.8;
						ctx.stroke();
					}
				}
			}

			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animationId);
			ro.disconnect();
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, [containerRef]);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
				pointerEvents: "none",
			}}
		/>
	);
};

export default InteractiveBackground;
