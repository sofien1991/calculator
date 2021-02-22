
let number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.key--operator');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.key--equal');
const display = document.querySelector('.calculator__display');



for (let i = 0; i < number.length; i++) {
	number[i].addEventListener('click', (e) => {
	  let num = e.target;
	  if (display.innerText == 0) {
	  	display.innerText = num.value;
	  }else {
	  	display.innerText += num.value;
	}	  
 })
}


for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', (e) => {
        let operatorKey = e.target;
        if (display.innerText[display.innerText.length - 1] === operatorKey.value) {
        	return false
        }else {
        	display.innerText += operatorKey.value;
        }
		
	})
}
 

clear.addEventListener('click', (e) => {
	let clearKey = e.target;
	display.innerText = 0;
})

equal.addEventListener('click', (e) => {
	let equalKey = e.target;
	display.innerText = eval(display.innerText)
	;
})

decimal.addEventListener('click', (e) => {
	let decimalKey = e.target;
	let lastElm = display.innerText[display.innerText.length - 1];
	if ( lastElm === '.' ) {
		return false
	}else {
		display.innerText += e.target.value;}	
})


