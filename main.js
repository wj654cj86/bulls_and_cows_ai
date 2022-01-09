let 資料 = [];
let 當前節點 = 猜測表;
function 猜測() {
	let n = 當前節點.數字.split('');
	資料.push({ 數字: n });
	return n;
}
function 提示(ab) {
	ab += '0000';
	let a = 0, b = 0;
	if (ab[1] == 'A' || ab[1] == 'a') {
		a = ab[0] * 1;
	}
	if (ab[1] == 'B' || ab[1] == 'b') {
		b = ab[0] * 1;
	}
	if (ab[3] == 'B' || ab[3] == 'b') {
		b = ab[2] * 1;
	}
	資料[資料.length - 1].提示 = [a, b];
}
function 重置() {
	資料 = [];
	當前節點 = 猜測表;
}

let 顯示表 = [];

window.onload = () => {
	let tbody = document.getElementsByTagName('tbody')[0];
	for (let i = 0; i < 7; i++) {
		let tr = document.createElement('tr');
		let 顯示 = { '次數': document.createElement('td'), '數字': document.createElement('td'), '提示': document.createElement('td') };
		顯示.次數.innerHTML = i + 1;
		tr.append(顯示.次數); tr.append(顯示.數字); tr.append(顯示.提示);
		tbody.append(tr);
		顯示表[i] = 顯示;
	}
	猜測按鈕.onclick = () => {
		if (資料.length == 0 || 資料[資料.length - 1].提示 !== undefined) {
			if (資料.length) 當前節點 = 當前節點[資料[資料.length - 1].提示.join('')];
			顯示表[資料.length].數字.innerHTML = 猜測().join('');
		}
	};
	提示按鈕.onclick = () => {
		if (資料.length == 0) return;
		提示(提示輸入.value);
		顯示表[資料.length - 1].提示.innerHTML = 資料[資料.length - 1].提示[0] + 'A' + 資料[資料.length - 1].提示[1] + 'B';
	};
	重置按鈕.onclick = () => {
		重置();
		for (let i = 0; i < 7; i++) {
			顯示表[i].數字.innerHTML = '';
			顯示表[i].提示.innerHTML = '';
		}
	};
};