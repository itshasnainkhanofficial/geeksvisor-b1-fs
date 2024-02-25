
const Desinfunc = () => {
    return (
        <div>
            <MyComp firstname="Hasnain" lastname="Khan"/>
            <MyComp firstname="Ali" lastname="Siddique"/>
        </div>
    )
}

export default Desinfunc





// const MyComp = (props) => {

//   return (
//    <h1>Hello {props.firstname} {props.lastname}</h1>
//   )
// }



// const MyComp = (props) => {
//     const {firstname, lastname} = props;
//   return (
//    <h1>Hello {firstname} {lastname}</h1>
//   )
// }

const MyComp = ({firstname, lastname}) => {
  return (
   <h1>Hello {firstname} {lastname}</h1>
  )
}