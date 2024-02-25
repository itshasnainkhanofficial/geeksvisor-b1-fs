import {  Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/mycontact">Contact</Link>
        </div>
    )
}

export default Navigation