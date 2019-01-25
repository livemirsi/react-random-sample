// @flow
import { generateRandomValue, binarySearch } from 'workers/sample/utils/utils';

import { type Image } from 'types/image';

type Args = {
	elements: Array<Image>,
	limit: number,
	weightSum: number
}

export const getRandomSampleWeight = (
	{ elements, limit, weightSum }: Args
): Array<Image | null> => {

	const randomIndexes = [];
	const sample = [];

	for (let index = 0; index < limit; index++) {

		randomIndexes.push(generateRandomValue(0, weightSum));

	}

	for (let index = 0; index < randomIndexes.length; index++) {

		sample.push(
			binarySearch(elements, randomIndexes[index])
		);

	}

	return sample;

};
