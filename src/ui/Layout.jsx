import styled from 'styled-components';

export const Layout = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80vw;
	max-width: 100%;
	margin: 5vh auto;
	padding: 20px;
	background: #fff;

	@media (max-width: 1024px) {
		width: 90vw;
	}
`;
