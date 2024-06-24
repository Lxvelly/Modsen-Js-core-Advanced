// Напишите функцию, которая принимает
// callback функцию и вызывает ее после
// задержки в 2 секунды.

function delayedCallback(callback) {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function executeCallback() {
        await delay(2000);  
        callback();        
    }
    executeCallback();     
}

delayedCallback(() => {
    console.log("Callback вызван через 2 секунды!");
});