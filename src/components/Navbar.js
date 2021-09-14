import React from 'react'

 const Navbar = ({auth}) => {

    const title = auth ? 'Home Page' : 'Login Page'
    return (
        <div className="navbar bg-primary">
            <h1>{title}</h1>
        </div>
    )
}

export default Navbar;