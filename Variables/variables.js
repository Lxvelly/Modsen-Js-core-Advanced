// Создайте блок кода внутри функции и
// объявите переменную с именем x с
// использованием var, let и const. Попытайтесь
// обратиться к этой переменной как внутри, так
// и вне блока. Какие переменные видны
// снаружи блока, а какие нет?

const func = () => {
 {
	let a = "let";
	var b = "var";
	const c = "const"; 

	console.log(a) // work
	console.log(b) // work
	console.log(c) // work
 }
 	console.log(a) // not work
	console.log(b) // work
	console.log(c) // not work
}

func()