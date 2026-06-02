import ReactGA from "react-ga4";

export const initGA = () => {
	ReactGA.initialize("G-KCJ0HDR2NG");
};

export const trackEvent = (category, action, label) => {
	ReactGA.event({ category, action, label });
};
