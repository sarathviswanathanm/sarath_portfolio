import ReactGA from "react-ga4";

export const initGA = () => {
	ReactGA.initialize("G-PT64HCQVVK");
};

export const trackEvent = (category, action, label) => {
	ReactGA.event({ category, action, label });
};
