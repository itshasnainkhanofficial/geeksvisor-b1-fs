
// const PropsComp = (props) => {

//     console.log(props)

//   return (
//    <div>
//      <div>My name is {props.myname}</div>
//     <div>Class {props.anything}</div>
//    </div>
//   )
// }

// export default PropsComp

const PropsComp = ({myname, anything}) => {


  return (
   <div>
     <div>My name is {myname}</div>
    <div>Class {anything}</div>
   </div>
  )
}

export default PropsComp