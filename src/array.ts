const isArray = (x: unknown): x is Array<never> => Array.isArray(x)

export function* reverse<T = unknown>(array: T[]): Generator<T, void, void> {
	for (let i = array.length - 1; i >= 0; i--) yield array[i]
}

/**
 * Iterate through elements in nested arrays
 */
type NestedArrays<T> = (T | NestedArrays<T>)[]
export function* nested<T = unknown>(array: NestedArrays<T>): Generator<T, void, void> {
	for (const x of array) {
		if (isArray(x)) yield* nested(x)
		else yield x as T
	}
}
