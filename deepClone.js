/**
 * 深克隆
 * @param {Object} obj
 */
function deepClone(obj) {
	if (!(obj instanceof Object)) {
		return obj;
	}
	let clone =  Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		clone[key] = obj[key] instanceof Object ? deepClone(obj[key]) : obj[key];
	}
	return clone;
}

let a = [12,{a: 'zcc', c: {b: 'wy'}},54,45,78,78];

let b = deepClone(a);
b[1].c.b = 'zcc';
console.log(a);
console.log(b);
