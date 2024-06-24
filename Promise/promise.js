// Напишите функцию, выполняющую серию
// асинхронных операций последовательно,
// используя Promises.

function Operation1() {
    return new Promise((resolve) => {
        console.log("Operation 1 done");
        resolve();
    });
}

function Operation2() {
    return new Promise((resolve) => {
        console.log("Operation 2 done");
        resolve();
    });
}

function Operation3() {
    return new Promise((resolve) => {
        console.log("Operation 3 done");
        resolve();
    });
}

Operation1().then(() => Operation2()).then(() => Operation3())
