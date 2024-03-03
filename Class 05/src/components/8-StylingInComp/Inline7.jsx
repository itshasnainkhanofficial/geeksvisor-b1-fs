// import React from 'react'

// const Inline7 = () => {
//   return (
//     <div>Inline7</div>
//   )
// }

// export default Inline7


import mystyle from './style6'


function Inline7() {
    return (
        <div>
            <h1 style={mystyle.headingStyle}>Inline style</h1>
            <p style={mystyle.paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident voluptate alias esse incidunt, aut fugiat, delectus illum suscipit consequuntur doloremque quia voluptatem, at maxime odio iste vitae ea molestias!</p>
            <div style={mystyle.divStyle}>my div text</div>
            <span style={mystyle.spanStyle}>My span text</span>
        </div>
    )
}

export default Inline7