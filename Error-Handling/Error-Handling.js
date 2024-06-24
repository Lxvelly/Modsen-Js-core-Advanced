// Напишите функцию, которая принимает
// число в качестве параметра и выдает
// пользовательскую ошибку, если число не
// является целым числом.

const checkInteger = (num) => {
	if(!Number.isInteger(num)){
		throw new Error("Not an integer");
	} 
}

try {
    checkInteger(3.14); 
} catch (error) {
    console.error(error.message);
}