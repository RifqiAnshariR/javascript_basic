// ----------------------------------
// setTimeout & setInterval
// ----------------------------------
console.group("setTimeout & setInterval");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

const interval = setInterval(() => {
    console.log("This runs every 1 second");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 5000);

console.groupEnd();

// ----------------------------------
// Callbacks
// ----------------------------------
console.group("Callbacks");

function fetchDataCallback(callback) {
    setTimeout(() => {
        callback("Data received via callback");
    }, 2000);
}

fetchDataCallback(console.log);

console.groupEnd();

// ----------------------------------
// Promises
// ----------------------------------
console.group("Promises");

function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received via Promise");
        }, 2000);
    });
}

fetchDataPromise().then(console.log);

console.groupEnd();

// ----------------------------------
// Async/Await
// ----------------------------------
console.group("Async/Await");

async function fetchDataAsync() {
    let data = await fetchDataPromise();
    console.log(data);
}

fetchDataAsync();

console.groupEnd();

// ----------------------------------
// Error Handling in Async/Await
// ----------------------------------
console.group("Error Handling in Async/Await");

async function fetchDataWithError() {
    try {
        let response = await fetch("https://invalid.url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataWithError();

console.groupEnd();

// ----------------------------------
// Chaining Promises
// ----------------------------------
console.group("Chaining Promises");

fetchDataPromise()
    .then(data => {
        console.log("Step 1:", data);
        return "Processed Data";
    })
    .then(processed => {
        console.log("Step 2:", processed);
    })
    .catch(error => {
        console.error("Error in promise chain:", error);
    });

console.groupEnd();

// ----------------------------------
// Fetch API with Async/Await
// ----------------------------------
console.group("Fetch API with Async/Await");

async function fetchAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
}

fetchAPI();

console.groupEnd();
