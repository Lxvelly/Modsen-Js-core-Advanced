// Напишите функцию, которая использует
// async/await для загрузки данных с удаленного
// сервера (например, с помощью API) и
// возвращает полученный результат.

const axios = require('axios');

const getCatFact = async () => {
	const resp = await axios.get('https://catfact.ninja/fact');
	console.log(resp.data.fact);
}

getCatFact();