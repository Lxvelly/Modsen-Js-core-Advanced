'use strict'

// Напишите функцию для расчета факториала
// числа. Функция должна принимать число в
// качестве аргумента и возвращать его
// факториал. Учтите использование строгого
// режима.

const factorial = (num) => {
	var result = 1;
	for (let i = 1; i <= num; i+=1) {
		result *= i
	}
	return result;
}

console.log(factorial(5))