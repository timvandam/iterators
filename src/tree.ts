import { withIndex } from './misc'

const getParent = (i: number) => Math.floor((i - 1) / 2)
const getLeftChild = (i: number) => 2 * i + 1
const getRightChild = (i: number) => 2 * i + 2
const hasNode = <T>(i: number, tree: T[]) => i < tree.length && (tree[i] ?? undefined) !== undefined
const hasLeftChild = <T>(i: number, tree: T[]) => hasNode(getLeftChild(i), tree)
const hasRightChild = <T>(i: number, tree: T[]) => hasNode(getRightChild(i), tree)

export function* preorder<T = unknown>(tree: T[], i = 0): Generator<T, void, void> {
	if (hasNode(i, tree)) yield tree[i]
	if (hasLeftChild(i, tree)) yield* preorder(tree, getLeftChild(i))
	if (hasRightChild(i, tree)) yield* preorder(tree, getRightChild(i))
}

export function* postorder<T = unknown>(tree: T[], i = 0): Generator<T, void, void> {
	if (hasLeftChild(i, tree)) yield* postorder(tree, getLeftChild(i))
	if (hasRightChild(i, tree)) yield* postorder(tree, getRightChild(i))
	if (hasNode(i, tree)) yield tree[i]
}

export function* inorder<T = unknown>(tree: T[], i = 0): Generator<T, void, void> {
	if (hasLeftChild(i, tree)) yield* inorder(tree, getLeftChild(i))
	if (hasNode(i, tree)) yield tree[i]
	if (hasRightChild(i, tree)) yield* inorder(tree, getRightChild(i))
}

export function* breadthfirst<T = unknown>(tree: T[], i = 0): Generator<T, void, void> {
	for (const [node, i] of withIndex(tree[Symbol.iterator]())) {
		if (!hasNode(i, tree)) continue
		yield node
	}
}
