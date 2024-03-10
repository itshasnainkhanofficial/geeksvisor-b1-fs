
// const Inline5 = () => {
//   return (
//     <div>Inline5</div>
//   )
// }

// export default Inline5


import {divStyle, paraStyle, headingStyle} from './style4'


function Inline5() {
    return (
        <div>
            <h1 style={headingStyle}>Inline style</h1>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident voluptate alias esse incidunt, aut fugiat, delectus illum suscipit consequuntur doloremque quia voluptatem, at maxime odio iste vitae ea molestias!</p>
            <div style={divStyle}>my div text</div>
        </div>
    )
}

export default Inline5
