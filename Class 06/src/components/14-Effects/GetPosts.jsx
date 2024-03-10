// import React, { useEffect, useState } from 'react'

// const GetPosts = () => {
//     const [data, setData] = useState([]);


//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const jsonData = await response.json();
//             setData(jsonData);

//             console.log(jsonData)
//         };
    
//         fetchData();
//       }, []); // Empty dependency array means this effect will run once after the initial render


//   return (
//     <div>
    
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
 
//   </div>
//   )
// }

// export default GetPosts






import React, { useEffect, useState } from 'react'

const GetPosts = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.github.com/users/hadiraza04');
            const jsonData = await response.json();
            setData(jsonData);

            console.log(jsonData)
        };
    
        fetchData();
      }, []); // Empty dependency array means this effect will run once after the initial render


  return (
    <div>
    
    <ul>
        <li>
          <strong>ID:</strong> {data.id}
        </li>
        <li>
          <strong>Login:</strong> {data.login}
        </li>
        <li>
          <strong>URL:</strong> {data.url}
        </li>
        {/* Add more properties as needed */}
      </ul>
 
  </div>
  )
}

export default GetPosts