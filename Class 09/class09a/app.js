// console.log("running");


// setTimeout(() => {
//     console.log("settime out worked")
// }, 3000);


// const promise1 = new Promise( (res, rej) => {
//     setTimeout(() => {
//         res("data")
//     }, 2000);
// })


// promise1.then((mydata)=> {
//     console.log(mydata)
// })


// const promise2 = new Promise( (res, rej) => {
//     setTimeout(() => {
//         const isError = true;

//         if(!isError){
//             res("data")
//         }
//         else{
//             rej("Error")
//         }

//     }, 2000);
// })


// promise2.then((mydata)=> {
//     console.log(mydata)
// })







// const promise2 = new Promise( (res, rej) => {
//     setTimeout(() => {
//         const isError = false;

//         if(!isError){
//             res("data")
//         }
//         else{
//             rej("Error")
//         }

//     }, 2000);
// })

// promise2.then((mydata)=> {
//     console.log(mydata)
// }).catch((err) => {
//     console.log(err)
// })



// const promise2 = new Promise( (res, rej) => {
//     setTimeout(() => {
//         const isError = true;

//         if(!isError){
//             res("data")
//         }
//         else{
//             rej("Error")
//         }

//     }, 2000);
// })

// promise2.then((mydata)=> {
//     console.log(mydata)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Finally run")
// })














// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
// xhr.open('get', "https://jsonplaceholder.typicode.com/users")
// console.log(xhr.readyState);
// xhr.send()
// console.log(xhr.readyState);















// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
// }
// xhr.open('get', "https://jsonplaceholder.typicode.com/users")
// xhr.send()







// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//         console.log(xhr.responseText)
//     }
// }
// xhr.send()














// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
   
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("There was a problem with the fetch operation:", error);
//   });








// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
   
//     return response.json();
//   })
//   .then(data => {
//     console.log(data[5].address.geo.lat);
//   })
//   .catch(error => {
//     console.log("There was a problem with the fetch operation:", error);
//   });




// fetch("https://jsonplaceholder.typicode.com/usrs")
//   .then(response => {
   
//     return response.json();
//   })
//   .then(data => {
//     console.log(data[5].address.geo.lat);
//   })
//   .catch(error => {
//     console.log("There was a problem with the fetch operation:", error);
//   });













  

fetch("https://jsonplaceholder.typicode.com/uses")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("There was a problem with the fetch operation:", error);
  });


