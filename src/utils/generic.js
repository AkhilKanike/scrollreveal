export function isObject (object) {
	return object !== null && typeof object === 'object' && object.constructor === Object;
}

export function logger (message) {
	if (console) {
		console.log(`ScrollReveal: ${message}`); // eslint-disable-line no-console
	}
}

export const nextUniqueId = (() => {
	let uid = 0;
	return () => uid++;
})();
