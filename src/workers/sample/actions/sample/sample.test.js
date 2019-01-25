import { getRandomSample } from './randomSample';
import { getRandomSampleWeight } from './randomSampleWeight';

describe('test - get random sample', () => {

	test('get random sample', () => {

		const array = Array.from(Array(30)).map((item, index) => ({ index }));
		const res = getRandomSample({
			elements: array,
			limit:    3
		});
		expect(res.length).toBe(3);

	});

	test('get random sample with weights', () => {

		const array = [{
			id:   0,
			from: 0,
			to:   50
		}, {
			id:   1,
			from: 51,
			to:   70
		}, {
			id:   2,
			from: 71,
			to:   80
		}, {
			id:   3,
			from: 81,
			to:   85
		}, {
			id:   4,
			from: 86,
			to:   95
		}
		];

		const res = getRandomSampleWeight({
			elements:  array,
			limit:     1,
			weightSum: 95
		});
		expect(res.length).toBe(1);

	});

});
