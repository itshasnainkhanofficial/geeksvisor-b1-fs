
// const Parent = () => {
//     let myname = "Hasnain"
//   return (
//     <div>
//         <Child name={myname}/>
//         <GrandChild name={myname}/>
//     </div>
//   )
// }

// export default Parent




// const Child = ({name}) => {
//   return (
//     // <div>My name is {props.name}</div>
//     <div>My name is {name}</div>
//   )
// }



// const GrandChild = ({name}) => {
//     return (
//       <div>Grand Child {name}</div>
//     )
//   }














// const Parent = () => {
//     let myname = "Hasnain"
//   return (
//     <div>
//         <Child name={myname}/>
       
//     </div>
//   )
// }

// export default Parent




// const Child = ({name}) => {
//   return (
//     // <div>My name is {props.name}</div>
//     <div>
//         <div>My name is {name}</div>
//         <GrandChild nametosendingrand={name}/>
//     </div>
//   )
// }



// const GrandChild = ({nametosendingrand}) => {
//     return (
//       <div>Grand Child {nametosendingrand}</div>
//     )
//   }





















// const Parent = () => {
//     let myname = "Hasnain"
//   return (
//     <div>
//         <Child name={myname}/>
       
//     </div>
//   )
// }

// export default Parent




// const Child = ({name}) => {
//   return (
//     <div>
//         <GrandChild nametosendingrand={name}/>
//     </div>
//   )
// }



// const GrandChild = ({nametosendingrand}) => {
//     return (
//       <div>Grand Child {nametosendingrand}</div>
//     )
//   }



const Parent = () => {
    let myname = "Hasnain"
  return (
    <div>
        <Child name={myname}/>
       
    </div>
  )
}

export default Parent




const Child = ({name}) => {
  return (
    <div>
        <GrandChild nametosendingrand={name}/>
    </div>
  )
}



const GrandChild = ({nametosendingrand}) => {
    return (
      <GrandsGrand datatosend={nametosendingrand}/>
    )
  }




const GrandsGrand = ({datatosend}) => {
    return (
        <div>
            my data {datatosend}
        </div>
    )
}
