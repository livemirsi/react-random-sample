// @flow
import React from 'react';

import { SampleItem, SampleList } from 'ui';

import { type Image } from 'types/image';

type Props = {
	list: Array<Image>
}

export const Sample = ({ list }: Props) => (
	<SampleList
		margin={'30px 0'}
	>
		{list.map((item, index) => (
			<SampleItem key={index}>
				<img src={item.thumbnailUrl} />
				{item.title}
			</SampleItem>
		))}
	</SampleList>
);
