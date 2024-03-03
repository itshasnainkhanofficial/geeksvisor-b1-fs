
// const Stylemodule9 = () => {
//   return (
//     <div>Stylemodule9</div>
//   )
// }

// export default Stylemodule9


// // // import kuchbhi from './Style8.module.css'
// import './Style2.css'
// import Advantagemodule10 from './Advantagemodule10'
// function Stylemodule9() {
//     return (
//         <div>
//              <h1 className="primary">simple style</h1>
//             <Advantagemodule10/>

//         </div>
//     )
// }

// export default Stylemodule9














import style from './Style8.module.css'
import Advantagemodule10 from './Advantagemodule10'
function Stylemodule9() {
    return (
        <div>
             {/* <h1 className="primary">simple style</h1> */}
             <h1 className={style.primary}>module style</h1>  
            <Advantagemodule10/>
        </div>
    )
}

export default Stylemodule9
