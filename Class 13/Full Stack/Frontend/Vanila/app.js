const baseURL = 'http://localhost:3500'; // Change this to your actual API URL




// const AddStudent = async () => {
//     const name = document.getElementById('name').value;
//     const fname = document.getElementById('fname').value;
//     const age = parseInt(document.getElementById('age').value);

//     const student = {name, fname, age} // name = name: name

//     const reqConfig = {
//         url : `${baseURL}/student`,
//         option : {
//         method: "POST",
//         headers: {
//                 'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(student)
//     }
//     }



//     try {
//         const res = await fetch(reqConfig.url, reqConfig.option)

//         // console.log({res});

//         const response = await res.json();
       
//         // console.log({response}); // response: value
//         // console.log(response);
//         // console.log(response.error);
//         // console.log(response.error.message);

//         if (!res.ok) {
//             console.log('Student not added:', response.error.message);
//             return
//         } 

//         console.log('Student added:', response);



//     } catch (error) {
        
//     }
    
// }

const AddStudent = async () => {
    const submitButton = document.getElementById('addstd');
    submitButton.textContent = 'Submitting...'; 
    submitButton.disabled = true; 

    const name = document.getElementById('name').value;
    const fname = document.getElementById('fname').value;
    const age = parseInt(document.getElementById('age').value);

    const student = {name, fname, age} // name = name: name

    const reqConfig = {
        url : `${baseURL}/student`,
        option : {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }
    }



    try {
        const res = await fetch(reqConfig.url, reqConfig.option)
        
        const response = await res.json();
    
        if (!res.ok) {
            console.log('Student not added:', response.error.message);
            ToastShow(`Student not added because ${response.error.message}`, 'error')
            return
        } 

        console.log('Student added:', response);
        ToastShow("Student added", 'success')
        

    } catch (error) {
        console.log(error);
    } finally {
        submitButton.textContent = 'Submit'; 
        submitButton.disabled = false; 
    }
    
}

let submitBtn = document.getElementById("addstd")

submitBtn.addEventListener('click', AddStudent)



const ToastShow = (msg, msgType) => {
    let backgroundColor;
    if (msgType === 'success') {
        backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)"; // Green gradient for success
    } else if (msgType === 'error') {
        backgroundColor = "linear-gradient(to right, #e74c3c, #c0392b)"; // Red gradient for error
    } else {
        backgroundColor = "linear-gradient(to right, #3498db, #2980b9)"; // Default blue gradient
    }
    Toastify({
        text: msg,
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: backgroundColor,
        },
      }).showToast();
}



// Assignment 
// Add student from frontend using html and js, also fetch student, 

