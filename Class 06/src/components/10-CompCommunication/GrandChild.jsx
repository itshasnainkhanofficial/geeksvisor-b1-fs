// import React from 'react'

// const GrandChild = (props) => {

//   return (
//     <div>
//       <h1>This is Grand Child</h1>
//       Yo {props.parentname}

//       <h2>data from the grand parent: {props.datafromgrandparent}</h2>
//     </div>
//   )
// }

// export default GrandChild









import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      This is from grand parent - {props.datafromgrand}
    </div>
  )
}

export default GrandChild