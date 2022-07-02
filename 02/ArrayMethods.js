Array.prototype.fakeForEach = function (cb) {
	for(let i = 0; i < this.length; i++)
		cb(this[i], i, this);
}

Array.prototype.fakeMap = function(cb) {
	const res = [];
	for(let i = 0; i < this.length; i++)
		res.push(cb(this[i], i, this));
	return res;
}

Array.prototype.fakeFilter = function(cb) {
	const res = [];
	for(let i = 0; i < this.length; i++)
		cb(this[i]) ? res.push(this[i]) : 0
	return res
}

Array.prototype.fakeReduce = function (cb, initial = 0) {
	let total = initial;
	for(let i = 0; i < this.length; i++)
		total = cb(total, this[i], i, this);
	return total;
}

Array.prototype.fakeEvery = function (cb) {
	this.length < 1 ? false : 0
	for(let i = 0; i < this.length; i++)
		return cb(this[i]) === true ? true : false;
}

Array.prototype.fakeSome = function (cb) {
	let flag = 0;
	this.length < 1 ? false : 0
	for(let i = 0; i < this.length; i++)
		cb(this[i]) === true ? flag++ : 0
	return flag ? true : false
}

Array.prototype.fakeFind = function(cb) {
	for(let i = 0; i < this.length; i++) {
		if(cb(this[i]) === true) {
			return this[i]
		}
	}
}

Array.prototype.fakeIndexOf = function(n, m) {
	let flag = 0;
	for(m ? i = m : i = 0; i < this.length; i++) {
		if(n === this[i]) {
			flag++;
			return i;
		}
	}
	if(!flag) {
		return -1;
	}
}