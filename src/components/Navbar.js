import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const changeColor = (mycolour) => {
        if (mycolour === 'light')
            return 'navbar navbar-expand-lg navbar-light bg-light';
        else if (mycolour === 'dark')
            return 'navbar navbar-expand-lg navbar-dark bg-dark';
        else if (mycolour === 'red')
            return 'navbar navbar-expand-lg navbar-light bg-danger';
        else if (mycolour === 'blue')
            return 'navbar navbar-expand-lg navbar-light bg-primary';
    }
        return (
            <div>
                <nav className={`${changeColor(props.mode)}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                            <li className="nav-item dropdown" style={{ "listStyleType": 'none' }}>
                                <a style={{"textDecoration":'none', "color":`${props.mode === 'dark'?'white':'black'}` }} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Themes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><div className={`form-check form-switch`}>
                                        <input onClick={props.toggledarkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Dark" : "Light"}</label>
                                    </div></li>
                                    <li><div className={`form-check form-switch`}>
                                        <input onClick={props.toggleredmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Red" : "Light"}</label>
                                    </div></li>
                                    <li><div className={`form-check form-switch`}>
                                        <input onClick={props.togglebluemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Blue" : "Light"}</label>
                                    </div></li>
                                </ul>
                            </li>
                            {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                            <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?"Enable Dark Mode":"Diasble Dark Mode"}</label>
                        </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    Navbar.propTypes = { title: PropTypes.string.isRequired }

    Navbar.defaultProps = { title: "Set title here" }