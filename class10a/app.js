


// // // Synchronous

// console.log("1");
// console.log("2");

// const synchronousTask = () => {
//   console.log("Synchronous Task");
// }

// synchronousTask()

// for(let i = 0 ; i <= 10000000000; i++){
  
// }

// console.log("3");








// // how settimeout works

// const synchronousTask = () => {
//   console.log("Synchronous Task");
// }

// setTimeout(() => {
// synchronousTask()
    
// }, 3000);











// // // Asynchronous


// console.log("1");
// console.log("2");

// const synchronousTask = () => {
//   console.log("Synchronous Task");
// }

// synchronousTask()

// setTimeout(() => {
// for(let i = 0 ; i <= 10000000000; i++){
// }  
// console.log("3");
// }, 0);


// console.log("4");





// // // now using promise for async
// console.log("Start");

// // Creating a promise
// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved");
//   }, 0); 
// });

// console.log("Promise created");

// // Logging the promise value when it's resolved
// myPromise.then((value) => {
//   console.log("Promise resolved with value:", value);
// });

// console.log("Execution Ended");






// now using promise for async
console.log("Start");

// Creating a promise
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved");
  }, 0); 
});

console.log("Promise created");

// async function asyncCall() {
//     let result = await myPromise;
//     console.log("Promise resolved with value:", result);
// }


const asyncCall = async () => {
    let result = await myPromise;
    console.log("Promise resolved with value:", result);
}

asyncCall();

console.log("Execution Ended");











