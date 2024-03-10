// import React from 'react'

// const StyleSheet1 = () => {
//   return (
//     <div>StyleSheet1</div>
//   )
// }

// export default StyleSheet1



// import "./Style2.css";
// function StyleSheet1() {
//     return (
//         <div>
//             <h1 className="primary">Style Sheet</h1>
//         </div>
//     )
// }
// export default StyleSheet1

















// // // class on condition
// import "./Style2.css";
// function StyleSheet1() {

//     let primary = true;
//     // let myclass;

//     // if (primary) {
//     //     myclass = "primary";
//     // } else {
//     //     myclass = "";
//     // }

//     let myclass = primary ? "primary" : ""

//     return (
//         <div>
//             <h1 className={myclass}>Style Sheet</h1>
//         </div>
//     )
// }
// export default StyleSheet1














// // by this way class will overwrite
// function StyleSheet1() {
    
//     let myclass = "primary"

//     return (
//         <div>
//             <h1 className={myclass, "secondclass"}>Style Sheet</h1>
//         </div>
//     )
// }
// export default StyleSheet1


















// class on condition and template litteral
import "./Style2.css";
function StyleSheet1() {
    // let myclass = "primary"
    let primary = false;
    let myclass = primary ? "primary" : ""
    return (
        <div>
            {/* <h1 className={`${myclass} fontlarge`}>Style Sheet</h1> */}
            <h1 className={`${myclass} fontlarge`}>Hasnain</h1>
        </div>
    )
}

export default StyleSheet1
