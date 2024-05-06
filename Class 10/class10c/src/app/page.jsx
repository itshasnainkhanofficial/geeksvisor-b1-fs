
// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }














// 'use client'
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [comments, setComments] = useState([]);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//       if (!response.ok) {
//         throw new Error('Failed to fetch comments');
//       }
//       const data = await response.json();

//       // console.log(data)
//       setComments(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   return (
//     <div>
//       <h1>Comments</h1>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>
//             <p>{comment.name}</p>
//             <p>{comment.email}</p>
//             <p>{comment.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




























// // on button click
// 'use client'
// import { useState } from 'react';

// export default function Home() {
//   const [comments, setComments] = useState([]);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//       if (!response.ok) {
//         throw new Error('Failed to fetch comments');
//       }
//       const data = await response.json();
//       setComments(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleButtonClick = () => {
//     // console.log("running");
//     fetchComments();
//   };

//   return (
//     <div>
//       <h1>Comments</h1>
//       <button onClick={handleButtonClick}>Fetch Comments</button>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>
//             <p>{comment.name}</p>
//             <p>{comment.email}</p>
//             <p>{comment.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// add loader
'use client'
import { useState } from 'react';
import './globals.css';
export default function Home() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error:', error);
    } 
    finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    fetchComments();
  };

  return (
    <div>
      <h1>Comments</h1>
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Comments'}
      </button>
      {loading && <div className="loader"></div>}
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

