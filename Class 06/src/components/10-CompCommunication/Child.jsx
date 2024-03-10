// import React from 'react'

// const Child = () => {
//   return (
//     <div>Child</div>
//   )
// }

// export default Child



// const Child = (props) => {
//   return (
//     <div>
//         My name is {props.myname}
//     </div>
//   )
// }

// export default Child











// const Child = (props) => {
//     return (
//         // <div>My Fruits: {props.myfruits}</div>
//         // <div>My Fruits: {props.myfruits[0]}</div>
//         <div>
//             {/* {
//         props.myfruits.map( (fruit, i) => {
//           return (
//           <ul key={i}>
//              <li>{fruit}</li>
//           </ul>
//           )
//         })
//       } */}


//             {/* {props.myfruits.map((fruit, index) => (
//         <ul key={index}>
//           <li>{fruit}</li>
//         </ul>
//       ))} */}

//         {
//             // props.myfruits.map( () => {}) // return
//             // props.myfruits.map( () => ()) // no need return
//         }

//         </div>
//     )
// }

// export default Child




// import React from 'react'
// import GrandChild from './GrandChild'

// const Child = (props) => {
//   return (
//     <div>
//         <h1>This is child</h1>
//         <GrandChild parentname="M2" />
//         {/* <GrandChild otherdata="M2" /> wrong*/}
        
//         <div>
//             my father is {props.myfather}

//             The other data {props.otherdata}

//             <h2>
//             <GrandChild parentname="M2" datafromgrandparent={props.otherdata}/>
//             </h2>

//         </div>
//     </div>
//   )
// }

// export default Child




import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <div>
        {/* Data from parent - {props.datafromparent} */}

        <GrandChild datafromgrand={props.datafromparent}/>
    </div>
  )
}

export default Child