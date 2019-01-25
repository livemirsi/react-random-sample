// @flow
import { type Image } from 'types/image';

export const weightAdd = (elements: Array<Image>): {
	elements: Array<Image>,
	weightSum: number
} => {

	let weightSum = 0;

	elements[0].from = 0;
	elements[0].to = elements[0].title.length;
	weightSum += elements[0].to;

	for (let index = 1; index < elements.length; index++) {

		elements[index].from = elements[index - 1].to;
		elements[index].to = elements[index].from + elements[index].title.length;

		weightSum += elements[index].title.length;

	}

	return {
		weightSum,
		elements
	};

};

