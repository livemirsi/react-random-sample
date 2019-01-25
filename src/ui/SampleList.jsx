// @flow
import styled from 'styled-components';

import type { ComponentType } from 'react';

type Props = {
	margin?: string
}

export const SampleList: ComponentType<Props> = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: ${({ margin }) => margin ? margin : '0px'};
`;
