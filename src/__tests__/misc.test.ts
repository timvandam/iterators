import { misc } from '../index'

describe('fibonacci works', () => {
	it('first 20 values work', () => {
		const result: number[] = []
		for (const [num, i] of misc.withIndex(misc.fibonacci())) {
			if (i === 20) break
			result.push(num)
		}
		expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181])
	})
})

describe('withIndex works', () => {
	it('on array iterators', () => {
		const array = [5, 1, 97, 10, 5]
		const result: number[][] = []
		for (const x of misc.withIndex(array[Symbol.iterator]())) result.push(x)
		expect(result).toEqual([
			[5, 0],
			[1, 1],
			[97, 2],
			[10, 3],
			[5, 4]
		])
	})
})

describe('range works', () => {
	it('from -5 to 10 with step 3', () => {
		expect([...misc.range(-5, 10, 3)]).toEqual([-5, -2, 1, 4, 7])
	})
})
