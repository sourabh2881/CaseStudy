import React from 'react'
import { Link } from 'react-router-dom'

function NotLoggedUser() {
    return (
        <div className='d-flex flex-row'>
            <h1 className='mx-auto my-4'>Log in to see this page.</h1>
            <Link to="/login" className='mx-auto'>
                <button className="btn btn-primary mx-auto">Log In Now</button>
            </Link>
        </div>
    )
}

export default NotLoggedUser