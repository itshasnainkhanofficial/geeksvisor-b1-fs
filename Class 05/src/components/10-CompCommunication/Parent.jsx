
// const Parent = () => {
//   return (
//     <div>Parent</div>
//   )
// }

import Child from "./Child"




// export default Parent



// import Child from "./Child"

// const Parent = () => {
//   return (
//     <div>
//         <Child myname="Hasnain"/>
//     </div>
//   )
// }

// export default Parent


// import Child from "./Child"

// const Parent = () => {
//   const fruitarr = ['apple', 'bnana', 'orange']
//   return (
//     <div>
//         <Child myfruits={fruitarr}/>
//      </div>
//   )
// }

// export default Parent



// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//     const someparentdata = "xyz"
//   return (
//     <div>
        
//         <Child myfather="Sbka bap"  otherdata={someparentdata}/>
//     </div>
//   )
// }

// export default Parent






const Parent = () => {
    const mydata = "this is comming from the main"
  return (
    <div>
        <Child datafromparent={mydata}/>
    </div>
  )
}

export default Parent