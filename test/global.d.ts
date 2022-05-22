export { }

declare global {
	namespace jest {
		interface Matchers<R> {
			toMatchImageSnapshot(): CustomMatcherResult;
		}
	}
}