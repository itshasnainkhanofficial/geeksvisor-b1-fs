
// fetch('http://localhost:4500')
//     .then( (res) => {
//         return res.json()
//     })
//     .then( (res) => {
//         console.log(res)
//     } )
//     .catch(error => console.error('Error:', error));



// fetch('http://localhost:4500')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));



// fetch('http://localhost:4500/abc')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error msg:', error));










// const fetchData = async () => {
//    try {
//     const res = await fetch("http://localhost:4500/abc")

//     const data = await res.json()

//     console.log(data)

//    } catch (error) {
//     console.log("Error", error);
    
//    }
// }

// fetchData();




const fetchData = async () => {
   try {
    const res = await fetch("http://localhost:4500/abc")

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json()

    console.log(data)

   } catch (error) {
    console.log("Error returned", error);
    
   }
}

fetchData();













// try {
//     const response = await fetch('http://localhost:4000');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log(data);
// } catch (error) {
//     console.error('Error:', error);
// }