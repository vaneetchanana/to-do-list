import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid justify-content-center">
                        <a className="navbar-brand " href="/">{props.title}</a>

                </div>
            </nav>
        </div>
    )
}


Navbar.defaultProps = {
    title: 'Your title here'
}


Navbar.prototype = {
    title: PropTypes.string.isRequired
}
