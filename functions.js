('use strict');

let aNumber = document.getElementById('numbera');
let bNumber = document.getElementById('numberB');
let operator = document.querySelectorAll('.op'); // znaki działań (przyciski)

export let summary = [];
export let anumbers = [];
export let bnumbers = [];

export function reset() {
	document.getElementById('numbera').value = '';
	document.getElementById('numberB').value = '';
	document.querySelector('.calc-sign').textContent = '';
	document.querySelector('.wynik-label').textContent = '';
	aNumber.disabled = false;
	bNumber.disabled = false;
	summary.length = 0;
	anumbers.length = 0;
	bnumbers.length = 0;
}

export function mathOpts() {
	document.querySelector('.btn-calc').addEventListener('click', function () {
		if (document.querySelector('.calc-sign').textContent == operator[0].value) {
			let sum = Number(document.querySelector('.numb-1').value) + Number(document.querySelector('.numb-2').value);
			document.querySelector('.wynik-label').textContent = sum.toFixed(2);
			console.log(sum);
		}

		if (document.querySelector('.calc-sign').textContent == operator[1].value) {
			let diff = Number(document.querySelector('.numb-1').value) - Number(document.querySelector('.numb-2').value);
			document.querySelector('.wynik-label').textContent = diff.toFixed(2);
			console.log(diff);
		}

		if (document.querySelector('.calc-sign').textContent == operator[2].value) {
			let multi = Number(document.querySelector('.numb-1').value) * Number(document.querySelector('.numb-2').value);
			document.querySelector('.wynik-label').textContent = multi.toFixed(2);
			console.log(multi);
		}

		if (document.querySelector('.calc-sign').textContent == operator[3].value) {
			let divi = Number(document.querySelector('.numb-1').value) / Number(document.querySelector('.numb-2').value);
			if (Number(document.querySelector('.numb-2').value) == 0) {
				alert('Nie dzielimy przez 0!!');
			} else {
				document.querySelector('.wynik-label').textContent = divi.toFixed(2);
				console.log(divi);
			}
		}

		if (document.querySelector('.calc-sign').textContent == operator[4].value) {
			let square = Number(document.querySelector('.numb-1').value) * Number(document.querySelector('.numb-1').value);
			document.querySelector('.wynik-label').textContent = square.toFixed(2);
			console.log(square);
		}

		anumbers.push(Number(document.querySelector('.numb-1').value));
		bnumbers.push(Number(document.querySelector('.numb-2').value));
		summary.push(Math.ceil(Number(document.querySelector('.wynik-label').textContent)));
	});
}
