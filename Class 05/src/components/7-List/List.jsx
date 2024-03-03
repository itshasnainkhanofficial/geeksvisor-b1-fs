import React from 'react'

const List = () => {
      const frontendframworkds = ["React", "Angular", "Vue"];
  return (

    // <div>
    //         {

    //         frontendframworkds.map((n, i) => <h1>{n}</h1> )  // index.js:1 Warning: Each child in a list should have a unique "key" prop.

    //         }
    //     </div>


    <div>
            {

            frontendframworkds.map((n, i) => <h1 key={i}>{i}- {n}</h1> )  // index.js:1 Warning: Each child in a list should have a unique "key" prop.

            }
        </div>
  )
}

export default List