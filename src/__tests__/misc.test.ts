import { misc } from '../index'

describe('fibonacci works', () => {
	it('first 20 values work', () => {
		let i = 0
		const result: number[] = []
		for (const num of misc.fibonacci()) {
			result.push(num)
			if (++i === 20) break
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
