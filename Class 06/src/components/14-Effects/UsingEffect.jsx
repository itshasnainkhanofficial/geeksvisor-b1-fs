



// const UsingEffect = () => {

//   // componentDidMount
//   useEffect(() => {
//     console.log("The use effect ran for componentDidMount");
//   }, []);


//   return (
//     <div>UsingEffect</div>
//   )
// }

// export default UsingEffect






const UsingEffect = () => {
    const [Count, setCount] = useState(0)


 //componentDidMount + componentDidUpdate , will run when only the specific state changes
  useEffect(() => {
    console.log("The use effect ran for componentDidMount");
  }, [Count]);

  
 let incrementcount = () => {
    setCount( pre => pre + 1 )
}
  return (
    <div>
         <h1>{Count}</h1>
        <button onClick={incrementcount} >Increment</button>
    </div>
  )
}

export default UsingEffect




























import { useEffect, useState } from 'react'

const UsingEffect1 = () => {
    const [Count, setCount] = useState(0)

    // let incrementcount = () => {
    //     setCount(Count + 1)
    // }

    // best practice
    let incrementcount = () => {
        setCount( pre => pre + 1 )
    }

//   // componentDidMount
//   useEffect(() => {
//     console.log("The use effect ran for componentDidMount");
//   }, []);


// //componentDidMount + componentDidUpdate , will run when only the specific state changes
//   useEffect(() => {
//     console.log("The use effect ran for componentDidMount");
//   }, [Count]);


// // // for both didmount and didupdate, will run when any state changes
// useEffect(() => {
//     console.log("The use effect ran for componentDidUpdate");
//   });

//  // componentWillUnmount
useEffect(() => {
    console.log("The use effect ran"); // this will run for component mount
    return () => {
      console.log("the return is being ran"); // this will run just before component unmount
    };
  }, []); // consider this blank array to run effect only once when compoenent mount


    return (
        <div>
            <h1>{Count}</h1>
            <button onClick={incrementcount} className="btn btn-secondary">Increment</button>
        </div>
    )
}

// export default UsingEffect1