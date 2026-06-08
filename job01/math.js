function addition(a, b) {
	if (!isNaN(a) && !isNaN(b)) {
		return Number(a) + Number(b)
	}
	else {
		return null
	}
}

module.exports = addition