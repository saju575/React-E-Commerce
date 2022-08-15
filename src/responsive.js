import { css } from "styled-components";

export const tabletXX = (props) => {
	return css`
		@media only screen and (min-width: 968px) and (max-width: 1201px) {
			${props}
		}
	`;
};
export const tablet = (props) => {
	return css`
		@media only screen and (min-width: 516px) and (max-width: 968px) {
			${props}
		}
	`;
};
export const tabletB = (props) => {
	return css`
		@media only screen and (min-width: 516px) and (max-width: 706px) {
			${props}
		}
	`;
};
export const tabletC = (props) => {
	return css`
		@media only screen and (min-width: 706px) and (max-width: 1045px) {
			${props}
		}
	`;
};

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 516px) {
			${props}
		}
	`;
};
export const mobileXS = (props) => {
	return css`
		@media only screen and (max-width: 320px) {
			${props}
		}
	`;
};
