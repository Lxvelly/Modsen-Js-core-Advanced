// Создайте класс под названием «Человек» со
// свойствами имени, возраста и страны.
// Включите метод для отображения сведений о
// человеке. Создайте два экземпляра класса
// «Человек» и отобразите их сведения.

class man {
	constructor(name,age,country) {
		this.name = name;
		this.age = age;
		this.country = country;
	}

	info() {
		return `Information about peron: \n Name: ${this.name} \n Age: ${this.age} \n Live in: ${this.country} \n`
	}
}

const man1 = new man("Ivan", "20", "Belarus")
const man2 = new man("Maxon", "16", "Russia")

console.log(man1, man2)