import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
	to { transform: rotate(0deg); }
	from { transform: rotate(360deg); }
`;

const runAnimaion = () => {

	return css`
		animation: ${rotate} 1s linear infinite;
	`;

};

export const Loader = styled.div`
	width: 100px;
	height: 100px;
	margin: 50px;
	background: #068ede;
	${runAnimaion()}
`;
