// ----------------------------------
// 1. Promise.all() Example
// ----------------------------------
function fetchAllData(urls) {
    return Promise.all(urls.map(url => fetch(url).then(res => res.json())));
}

const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
fetchAllData(urls)
    .then(data => console.log("All data fetched:", data))
    .catch(error => console.log("Error fetching data:", error));

// ----------------------------------
// 2. Promise.allSettled() Example
// ----------------------------------
function fetchAllSettled(urls) {
    return Promise.allSettled(urls.map(url => fetch(url)));
}

fetchAllSettled(urls)
    .then(results => console.log("All requests settled:", results));

// ----------------------------------
// 3. Promise.race() Example
// ----------------------------------
function fetchFastest(urls) {
    return Promise.race(urls.map(url => fetch(url)));
}

fetchFastest(urls)
    .then(response => console.log("Fastest response:", response))
    .catch(error => console.log("Error in fastest response:", error));

// ----------------------------------
// 4. Promise.any() Example
// ----------------------------------
function fetchAnySuccessful(urls) {
    return Promise.any(urls.map(url => fetch(url)));
}

fetchAnySuccessful(urls)
    .then(response => console.log("First successful response:", response))
    .catch(error => console.log("All requests failed:", error));

// ----------------------------------
// 5. Custom Promise Example
// ----------------------------------
function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(`Waited ${ms} ms`), ms));
}

delay(2000)
    .then(message => console.log(message));
