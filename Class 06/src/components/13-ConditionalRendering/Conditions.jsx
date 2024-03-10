
// const Conditions = () => {
//     const username = "Bilal"

//     let message;

//     if (username === "Hasnain") {
//         message = <div>Hello Hasnain</div>;
//     } else if(username === "Bilal"){
//         message = <div>Hello Bilal</div>;
//     }
    
//     else {
//         message = <div>Hello Guest</div>;
//     }

//     return <div>{message}</div>;
// }

// export default Conditions






// const Conditions = () => {
//     let IsloggedIn = true;

//     return (
//       IsloggedIn && <div>Welcome Student</div>
//     )
// }

// export default Conditions





// const Conditions = () => {
//     let IsloggedIn = true;

//   return (
//     IsloggedIn ?  <div>Welcome Student</div> : <div>Welcome Guest</div> 
//   )
// }

// export default Conditions



// // wrong approch
// const Conditions = () => {
   
//     let IsLoggedIn = false

//   return (
//     if(IsLoggedIn){
//                  <div>Hello Student</div>
//             }
//             else{
//                 div>Hello Guest</div>
//             }
//   )
// }

// export default Conditions




// // wrong approch
const Conditions = () => {
   
    const username = "Hasnain"

//   return (
//     <div>IfElese</div>
//   )

if(username == "Hasnain"){
    return (
        <div>Hello Hasnain</div>
    )
}
else if(username == "Bilal"){
    return (
        <div>Hello Bilal</div>
    )
}
else {
    return (
        <div>Hello Guest</div>
    )
}
}

export default Conditions