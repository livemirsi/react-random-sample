import { weightAdd } from './weight';

describe('test - add weight', () => {

	const arr = [
		{ title: 'title' },
		{ title: 'title1' },
		{ title: 'title2' }
	];
	const { elements, weightSum } = weightAdd(arr);

	test('test count', () => {

		expect(elements.filter(item => typeof item.from === 'number' && item.to).length).toBe(3);

	});

	test('test sum', () => {

		expect(weightSum).toBe(17);

	});

	test('test first element', () => {

		expect(elements[0]).toEqual({
			title: 'title',
			from:  0,
			to:    5
		});

	});

	test('test second element', () => {

		expect(elements[1]).toEqual({
			title: 'title1',
			from:  5,
			to:    11
		});

	});

	test('test third element', () => {

		expect(elements[2]).toEqual({
			title: 'title2',
			from:  11,
			to:    17
		});

	});

});
