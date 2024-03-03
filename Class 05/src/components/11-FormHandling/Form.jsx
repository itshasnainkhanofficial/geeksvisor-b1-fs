
// const Form = () => {
//   return (
//     <div>Form</div>
//   )
// }

// export default Form


// // creating regular html form
// const Form = () => {
//   return (
//     <div>
//         <form>
//              <div>
//                 <label htmlFor="myname">Name:</label>
//                 <input type="text" id="myname"/>
//               </div>
//           </form>
//     </div>
//   )
// }

// export default Form

// // control react component
// import React, { useState } from 'react';

// const Form1 = () => {
//   const [myname, setMyName] = useState('');

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="myname">Name:</label>
//           <input type="text" value={myname} id="myname" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form1;





// // // // control react component
// import React, { useState } from 'react';

// const Form = () => {
//   const [myname, setMyName] = useState('Hasnain');

//   const changeValue = (e) => {
//     // console.log(e)
//     // console.log(e.target.value)
//     setMyName(e.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label >Name:</label>
//           <input type="text" value={myname} onChange={changeValue} />
//           <div>{myname}</div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

// // To prevent page refresh on submit and add select field
// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     myname: '',
//     myfname: '',
//     course: 'react',
//   });

//   const changeNameValue = (e) => {
//     setFormData({
//       myname: e.target.value,
//       myfname: formData.myfname,
//       course: formData.course,
//     });
//   };

//   const changeFNameValue = (e) => {
//     setFormData({
//       myname: formData.myname,
//       myfname: e.target.value,
//       course: formData.course,
//     });
//   };

//   const courseHandler = (e) => {
//     setFormData({
//       myname: formData.myname,
//       myfname: formData.myfname,
//       course: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(`${formData.myname} `);
//     // console.log(`${formData.myname} - ${formData.myfname} `);
//     console.log(`${formData.myname} - ${formData.myfname} and ${formData.course}`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label >Name:</label>
//           <input type="text" value={formData.myname} onChange={changeNameValue} />
//           <label >FName:</label>
//           <input type="text" value={formData.myfname}  onChange={changeFNameValue} />
//           <label>Courses</label>
//           <select name="course" value={formData.course} onChange={courseHandler}>
//             <option value="react">react</option>
//             <option value="angular">angular</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;


// // without submit button
// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     myname: '',
//     myfname: '',
//     course: 'react',
//   });

//   const changeNameValue = (e) => {
//     setFormData({
//       myname: e.target.value,
//       myfname: formData.myfname,
//       course: formData.course,
//     });
//   };

//   const changeFNameValue = (e) => {
//     setFormData({
//       myname: formData.myname,
//       myfname: e.target.value,
//       course: formData.course,
//     });
//   };

//   const courseHandler = (e) => {
//     setFormData({
//       myname: formData.myname,
//       myfname: formData.myfname,
//       course: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`${formData.myname} and ${formData.course}`);
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="myname">Name:</label>
//           <input type="text" value={formData.myname} id="myname" onChange={changeNameValue} />
//           <label htmlFor="myfname">FName:</label>
//           <input type="text" value={formData.myfname} id="myfname" onChange={changeFNameValue} />
//           <label htmlFor="course">Courses</label>
//           <select name="course" id="course" value={formData.course} onChange={courseHandler}>
//             <option value="react">react</option>
//             <option value="angular">angular</option>
//           </select>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;










// // optimized version
// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     myname: '',
//     myfname: '',
//     course: 'react',
//   });

//   const changeNameValue = (e) => {
//     setFormData({
//       ...formData,
//       myname: e.target.value,
//     });
//   };

//   const changeFNameValue = (e) => {
//     setFormData({
//       ...formData,
//       myfname: e.target.value,
//     });
//   };

//   const courseHandler = (e) => {
//     setFormData({
//       ...formData,
//       course: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`${formData.myname} - ${formData.myfname} and ${formData.course}`);

//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="myname">Name:</label>
//           <input type="text" value={formData.myname} id="myname" onChange={changeNameValue} />
//           <label htmlFor="myfname">FName:</label>
//           <input type="text" value={formData.myfname} id="myfname" onChange={changeFNameValue} />
//           <label htmlFor="course">Courses</label>
//           <select name="course" id="course" value={formData.course} onChange={courseHandler}>
//             <option value="react">react</option>
//             <option value="angular">angular</option>
//           </select>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;



// fully optimzed version
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    myname: '',
    myfname: '',
    course: 'react',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${formData.myname}, ${formData.myfname} and ${formData.course}`);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="myname">Name:</label>
          <input type="text" value={formData.myname} id="myname" onChange={handleChange} />
          <label htmlFor="myfname">FName:</label>
          <input type="text" value={formData.myfname} id="myfname" onChange={handleChange} />
          <label htmlFor="course">Courses</label>
          <select name="course" id="course" value={formData.course} onChange={handleChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
