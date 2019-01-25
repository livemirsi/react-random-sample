import styled from 'styled-components';

export const MenuItem = styled.button`
	margin: ${({ margin }) => margin ? margin : '0px'};
	padding: 10px;
	background: #dcdee0;
	border: 0;
	color: #000;
	text-transform: uppercase;
	cursor: pointer;
`;
