import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 451px) {
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
