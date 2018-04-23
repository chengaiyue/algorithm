function maxAdd(str1, str2) {
	let aArr = str1.split('');
	let bArr = str2.split('');
	let newArr = [];
	let cash = 0;
	while(aArr.length > 0 && bArr.length > 0) {
		let a = aArr.pop();
		let b = bArr.pop();
		if (a && b) {
			let newNum = Number(a) + Number(b);
			newArr.push(newNum);
		}
	}
	
	if (aArr.length > 0) {
		while(aArr.length) {
			newArr.push(aArr.pop());
		}
	} else if (bArr.length > 0) {
		while(bArr.length) {
			newArr.push(bArr.pop());
		}
	}
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = Number(newArr[i]) + cash;
		if (newArr[i] > 10) {
			cash = Math.floor(newArr[i] / 10);
			newArr[i] = newArr[i] % 10;
		} else {
			cash = 0;
		}
	}
	return newArr.reverse().join('');
}

let newArr = maxAdd('1111454545454', '891631831');
