import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className='error-page section'>
            <div className='error-container'>
                <h1>The page is not found</h1>
                <Link to='/' className='btn btn-primary'>Go back to home</Link>
            </div>
        </div>
    )
}

export default Error
