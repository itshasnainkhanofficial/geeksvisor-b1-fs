// import { useState } from 'react'



// const Events = () => {

//     const [firstName, setfirstName] = useState("Hasnain")



//   return (
//     <div>
//         <div>My name is {firstName}</div>
//     </div>

//     )
// }

// export default Events



// const Events = () => {


//     const clickhandler = () => {
//         console.log("Hello its running")
//     }


//   return (
//     <div>
//         <button onClick={clickhandler}>Change Name</button>
//     </div>

//     )
// }

// export default Events






// const Events = () => {
    
    

//     const clickhandler = (val) => {
//         console.log(val)
//     }


//   return (
//     <div>
//         <button onClick={() => clickhandler("Ali")}>Change Name</button>
//     </div>

//     )
// }

// export default Events



// const Events = () => {
    
    

//     const clickhandler = (val) => {
//         console.log(val)
//     }


//   return (
//     <div>
//         <button onClick={() => {return clickhandler("Hello")}}>Change Name</button>
//     </div>

//     )
// }

// export default Events














// import { useState } from "react"

// const Events = () => {
//     const [firstName, setfirstName] = useState("Hasnain")


//     const clickhandler = (val) => {
//         setfirstName(val)
//     }


//   return (
//     <div>
//         <div>My firstname: {firstName}</div>
//         <button onClick={() => clickhandler("Ali")}>Change Name</button>
//     </div>

//     )
// }

// export default Events



// import { useState } from "react"

// const Events = () => {
//     const [firstName, setfirstName] = useState("Hasnain")


//     const clickhandler = (val) => {
//         setfirstName(val)
//         console.log("Logic 1")
//         console.log("Logic 2")
//         console.log("Logic 3")
//         console.log("Logic 4")
//     }


//   return (
//     <div>
//         <div>My firstname: {firstName}</div>
//         <button onClick={() => clickhandler("Ali")}>Change Name</button>
//     </div>

//     )
// }

// export default Events




// import { useState } from "react"

// const Events = () => {

//     const [firstName, setfirstName] = useState("Hasnain")

//   return (
//     <div>
//         <div>My firstname: {firstName}</div>
//         <button onClick={() => setfirstName("Farzana")}>Change Name</button>
//     </div>

//     )
// }

// export default Events



import { useState } from "react"

const Events = () => {
    const myarr = ["Hasnain", "Zahid"]
    const [firstName, setfirstName] = useState(myarr[0])


  return (
    <div>
        <div>My firstname: {firstName}</div>
        <button onClick={() => setfirstName(myarr[1])}>Change Name</button>
    </div>

    )
}

export default Events