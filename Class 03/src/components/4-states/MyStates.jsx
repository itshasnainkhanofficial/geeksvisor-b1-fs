// import { useState } from "react"

// const MyStates = () => {
//     const [firstname, setfirstname] = useState("Hasnain")


//   return (
//     <div>MyStates {firstname}</div>
//   )
// }

// export default MyStates












// import {useState} from 'react'

// const MyStates = () => {
//     const [priceofegg, setPriceOfEgg] = useState(25)

//   return (
//     <div>Egg Price {priceofegg}</div>
//   )


// }



// export default MyStates












// import {useState} from 'react'

// const MyStates = () => {
//     const [fruits, setFruits] = useState(["Banana ", "Orange ", "Apple"])

//   return (
//     <div>All fruits {fruits}</div>
//   )


// }

// export default MyStates


















// // // now changing initial values
// import { useEffect, useState} from 'react'

// const MyStates = () => {
//     const [name, setName] = useState("Hasnain")
//     console.log(name)


//     useEffect(() => {
//         setName("Arif")
//     }, [])
    

//   return (
//     <div>My name is {name}</div>
//   )


// }

// export default MyStates


// import {useEffect, useState} from 'react'

// const MyStates = () => {
//     const [priceofegg, setPriceOfEgg] = useState(25)
  
//     useEffect(() => {
//         // This code will run after the initial render
//         setPriceOfEgg(30);
//       }, []);
//   return (
//     <div>Price of eggs {priceofegg}</div>
//   )


// }

// export default MyStates



 import {useEffect, useState} from 'react'

const MyStates = () => {
    const [fruits, setFruits] = useState(["Banana", "Orange", "Apple"])

    useEffect(() => {
        // This code will run after the initial render
        setFruits(["B", "O", "A"]);
      }, []);

      
  return (
    <div>My fruits are {fruits}</div>
  )


}

export default MyStates