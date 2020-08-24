import { tree } from '../index'

let nums: (number | undefined | null)[]
beforeEach(() => {
	nums = [1, 4, 56, 1, 7, null, 10]
})

describe('preorder works', () => {
	it('iterates properly', () => {
		const result = []
		for (const num of tree.preorder(nums)) result.push(num)
		expect(result).toEqual([1, 4, 1, 7, 56, 10])
	})
})

describe('postorder works', () => {
	it('iterates properly', () => {
		const result = []
		for (const num of tree.postorder(nums)) result.push(num)
		expect(result).toEqual([1, 7, 4, 10, 56, 1])
	})
})

describe('inorder works', () => {
	it('iterates properly', () => {
		const result = []
		for (const num of tree.inorder(nums)) result.push(num)
		expect(result).toEqual([1, 4, 7, 1, 56, 10])
	})
})

describe('breadthfirst works', () => {
	it('iterates properly', () => {
		const result = []
		for (const num of tree.breadthfirst(nums)) result.push(num)
		expect(result).toEqual(nums.filter((x) => (x ?? undefined) !== undefined))
	})
})
