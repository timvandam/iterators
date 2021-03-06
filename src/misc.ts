/**
 * Iterator that yields all values in the fibonacci sequence
 */
export function* fibonacci(): Generator<number, void, void> {
	let x = 0
	let y = 1
	while (true) {
		yield x
		const next = x + y
		x = y
		y = next
	}
}

/**
 * Wraps around another iterator and adds an index property to it
 */
export function* withIndex<T = unknown>(iterator: Iterator<T>): Generator<[T, number], void, void> {
	let i = 0
	let value: T
	let done: boolean | undefined = false
	while (({ value, done } = iterator.next()) && !done) {
		yield [value, i]
		i++
	}
}

/**
 * Range [0, j) with step 1
 */
export function range(stop: number): Generator<number, void, void>

/**
 * Range [i, j) with step 1
 */
export function range(start: number, stop: number): Generator<number, void, void>

/**
 * Range [i, j) with step k
 */
export function range(start: number, stop: number, step: number): Generator<number, void, void>

export function* range(start: number, stop?: number, step = 1): Generator<number, void, void> {
	if (stop === undefined) {
		stop = start
		start = 0
	}
	for (let i = start; i < stop; i += step) yield i
}
