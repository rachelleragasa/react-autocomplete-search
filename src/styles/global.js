import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

/**
 * Global App Styles
 */
const GlobalStyles = createGlobalStyle`
	${normalize};
	
	body, html {
		width: 100%;
		height: 100vh;
	}

	body {
		background-color: #ff9800;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
	}
 `;

export default GlobalStyles;
