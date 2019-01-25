// @flow
import { type Image } from 'types/image';

export const generateRandomValue = (min: number, max: number): number => {

	return parseInt(Math.random() * (max - min) + min, 10);

};

export const binarySearch = (array: Array<Image>, target: number): Image | null => {

	if (array.length === 1) {

		return array[0];

	}

	let left = 0;
	let right = array.length - 1;

	while (left <= right) {

		const middle = Math.floor((left + right) / 2);
		const element = array[middle];

		if (target >= element.from && target <= element.to) {

			return element;

		}

		if (target < element.from) {

			right = middle - 1;

		}

		if (target > element.to) {

			left = middle + 1;

		}

	}

	return null;

};
