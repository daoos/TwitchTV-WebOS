// Is object valid and has a key
export function validObject (obj, key) {
	// check:		is object				has keys						given key				given key exists	given key valid
	return (typeof obj === 'object' && Object.keys(obj).length > 0) && (typeof key === 'string' ? (obj.hasOwnProperty(key) && obj[key]) : true)
}

// is numeric
export function isNumeric (n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}

// Remove duplicate objects from array by key
export function removeDuplicates (obj, key) {
	obj = obj.filter((item, index, self) => self.findIndex(t => t[key] === item[key]) === index)
	return obj
}
