export function* reverse<T = unknown>(array: T[]): Generator<T, void, void> {
	for (let i = array.length - 1; i >= 0; i--) yield array[i]
}
