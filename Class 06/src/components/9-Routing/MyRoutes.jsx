




// const MyRoutes = () => {
//   return (
//     <div>Routes</div>
//   )
// }

// export default MyRoutes



















// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'

const MyRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/mycontact">Contact</Link> */}
                <Navigation/>


                <Routes>
                    <Route path='/' element={<HomePage />} />

                    <Route path='/about' element={<About/>}/>

                    <Route path='/mycontact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRoutes