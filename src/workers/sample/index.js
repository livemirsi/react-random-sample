// @flow
import { getData } from 'workers/sample/actions/api';
import { getRandomSample } from 'workers/sample/actions/sample/randomSample';
import { getRandomSampleWeight } from 'workers/sample/actions/sample/randomSampleWeight';
import { weightAdd } from 'workers/sample/actions/weight/weight';

import { type Image } from 'types/image';

self.storage = {
	elements:    [],
	weightAdded: false,
	weightSum:   0
};

type Storage = {
	elements: Array<Image>,
	weightAdded: boolean,
	weightSum: number
}

type ActionType = 'init' | 'getRandomSample' | 'getRandomSampleWeight';

const storage: Storage = self.storage;

self.onmessage = event => {

	const { type }: {type: ActionType} = event.data;

	if (type === 'init') {

		getData();

	}

	if (type === 'getRandomSample') {

		const randomSample = getRandomSample({
			elements: storage.elements,
			limit:    50
		});

		self.postMessage({
			status: 'showSample',
			sample: randomSample
		});

	}

	if (type === 'getRandomSampleWeight') {

		if (!storage.weightAdded) {

			const { elements: elementsWeight,
				weightSum: newWeightSum } = weightAdd(storage.elements);
			storage.weightAdded = true;
			storage.weightSum = newWeightSum;
			storage.elements = elementsWeight;

		}

		const randomSampleWeight = getRandomSampleWeight({
			elements:  storage.elements,
			limit:     5,
			weightSum: storage.weightSum
		});
		self.postMessage({
			status: 'showSample',
			sample: randomSampleWeight
		});

	}

};

