import { generateRandomValue, binarySearch } from './utils';

describe('test - generate random value', () => {

	test('generate value in the range from 0 to 10', () => {

		const res = generateRandomValue(0, 10);
		expect(res).toBeGreaterThanOrEqual(0);
		expect(res).toBeLessThanOrEqual(10);

	});

});

describe('test - binary search', () => {

	const array = [{
		id:   0,
		from: 0,
		to:   50
	}, {
		id:   1,
		from: 50,
		to:   70
	}, {
		id:   2,
		from: 70,
		to:   80
	}, {
		id:   3,
		from: 80,
		to:   85
	}, {
		id:   4,
		from: 85,
		to:   95
	}
	];

	test('find 1', () => {

		const res = binarySearch(array, 25);
		expect(res.id).toBe(0);

	});

	test('find 2', () => {

		const res = binarySearch(array, 0);
		expect(res.id).toBe(0);

	});

	test('find 3', () => {

		const res = binarySearch(array, 50);
		expect(res.id).toBe(0);

	});

	test('find 4', () => {

		const res = binarySearch(array, 86);
		expect(res.id).toBe(4);

	});

	test('find 5', () => {

		const res = binarySearch(array, 81);
		expect(res.id).toBe(3);

	});

	test('array length equal 2', () => {

		const arrayTwoElements = [{
			id:   0,
			from: 0,
			to:   50
		}, {
			id:   1,
			from: 50,
			to:   70
		}];

		const res = binarySearch(arrayTwoElements, 51);
		expect(res.id).toBe(1);

	});

	test('array length equal 1', () => {

		const arrayTwoElements = [{
			id:   0,
			from: 0,
			to:   50
		}];

		const res = binarySearch(arrayTwoElements, 50);
		expect(res.id).toBe(0);

	});

});

