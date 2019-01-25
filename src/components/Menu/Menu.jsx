// @flow
import React from 'react';

import { MenuList, MenuItem } from 'ui';

type Props = {
	onRandomSample: Function,
	onRandomSampleWeight: Function
};

export const Menu = ({ onRandomSample, onRandomSampleWeight }: Props) => (
	<MenuList>
		<MenuItem
			onClick={onRandomSample}
		>
			get sample
		</MenuItem>
		<MenuItem
			onClick={onRandomSampleWeight}
			margin={'0px 0px 0px 10px'}
		>
			get sample with weight
		</MenuItem>
	</MenuList>
);
