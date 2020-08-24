import { array } from '../index'

describe('reverse works', () => {
	it('iterates properly', () => {
		const nums = [1, 4, 56, 1]
		const result = []
		for (const num of array.reverse(nums)) result.push(num)
		expect(result).toEqual(nums.reverse())
	})
})
