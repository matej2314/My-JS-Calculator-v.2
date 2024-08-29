import { reset, mathOpts, summary, anumbers, bnumbers } from './functions.js';
('use strict');

let aNumber = document.getElementById('numbera');
let bNumber = document.querySelector('.numberb');
let signField = document.querySelector('.calc-sign');

mathOpts();

function handlerCalculator() {
	let activeInputOne = false;
	let activeInputTwo = false;

	aNumber.addEventListener('focus', function () {
		activeInputOne = true;
		activeInputTwo = false;
	});

	bNumber.addEventListener('focus', function () {
		activeInputTwo = true;
		activeInputOne = false;
	});

	for (let i = 0; i <= 9; i++) {
		document.querySelector(`.btn--${i}`).addEventListener('click', function () {
			const valueCalc = document.querySelector(`.btn--${i}`).value;

			if (activeInputOne) {
				document.querySelector('.numb-1').value += valueCalc;
			} else if (activeInputTwo) {
				document.querySelector('.numb-2').value += valueCalc;
			}
		});
	}
}

handlerCalculator();

function blockInputOne() {
	document.querySelector('.numb-1').addEventListener('keydown', function (e) {
		if (e.key == 'arrowDown') {
			aNumber.disabled = true;
			document.querySelector('.numb-2').focus();
			activeInputOne = false;
			activeInputTwo = true;
		}
	});
}
blockInputOne();

if (
	window.addEventListener('keydown', function (e) {
		if (e.key == 'Enter') {
			aNumber.disabled = false;
			bNumber.disabled = false;
			activeInputOne = true;
			activeInputTwo = true;
		}
	})
);

for (let k = 1; k < 6; k++) {
	document.querySelector(`.op--${k}`).addEventListener('click', function () {
		signField.textContent = document.querySelector(`.op--${k}`).value;
	});
}

document.addEventListener('keydown', function (e) {
	if (e.key == 'Escape') {
		reset();
	}
});

document.getElementById('btn-reset').addEventListener('click', reset);

//  -------------- table functionality -------------------

const wholeTable = document.querySelector('.table-sum');
const opersum = document.querySelector('.opersum');

for (let i = 1; i < 5; i++) {
	document.querySelector('.btn-table').addEventListener('click', function () {
		if (aNumber.value == 0 && bNumber.value == 0) {
			alert('Wykonaj obliczenia!');
		} else {
			let tbody = document.createElement('tbody');
			let tr = document.createElement('tr');
			tr.className = `table-vals vals-${i}`;
			let td1 = document.createElement('td');
			td1.className = `calc-opt opt-${i}`;
			let td2 = document.createElement('td');
			td2.className = `opt-sum tabsum-${i}`;

			let text1 = document.createTextNode(`${anumbers[0]} ${signField.textContent} ${bnumbers[0]}`);
			let text2 = document.createTextNode(summary[0]);

			td1.appendChild(text1);
			td2.appendChild(text2);

			tr.appendChild(td1);
			tr.appendChild(td2);

			tbody.appendChild(tr);
			wholeTable.appendChild(tbody);
			reset();
		}
	});
	break;
}

document.querySelector('.sum-button').addEventListener('click', function () {
	let optSum = [...document.querySelectorAll('.opt-sum')];
	let sumofColumn = optSum.reduce(function (accumulator, currentValue) {
		return accumulator + Number(currentValue.innerText) || 0;
	}, 0);
	opersum.innerText = sumofColumn;
});

document.querySelector('.clear-table').addEventListener('click', function () {
	let tbodyElems = [...document.querySelectorAll('tbody')];
	for (let i = 1; i <= tbodyElems.length; i++) {
		tbodyElems[i].remove();
		opersum.innerText = '';
	}
});
