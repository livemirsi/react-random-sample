// @flow
import { generateRandomValue } from 'workers/sample/utils/utils';

import { type Image } from 'types/image';

type Args = {
	elements: Array<Image>,
	limit: number
}

export const getRandomSample = ({ elements, limit }: Args): Array<Image> => {

	const sample = [];

	for (let index = 0; index < limit; index++) {

		const randomIndex = generateRandomValue(0, limit);
		sample.push(elements[randomIndex]);

	}

	return sample;

};

