







// import React from 'react'

// const Inline3 = () => {
//   return (
//     <div>Inline3</div>
//   )
// }

// export default Inline3





const headingStyle = {
    fontSize : "48px", // camelcase key and value as string
    color : "red"
}

const paraStyle = {
    fontSize: '20px',
    color: "#fff",
    backgroundColor: "blue"
}

function Inline3() {
    return (
        <div>
            <h1 style={headingStyle}>Inline style</h1>
            <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident voluptate alias esse incidunt, aut fugiat, delectus illum suscipit consequuntur doloremque quia voluptatem, at maxime odio iste vitae ea molestias!</p>
        </div>
    )
}

export default Inline3
