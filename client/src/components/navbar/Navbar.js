import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from "../navbar/pictures/logo2.png"

const Navbar = () => {
  return (
        <div className='nav-container'>
            <ul>
                <li>
                    <Link to="/">
                        <button className='nav-btn'>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/women">
                        <button className='nav-btn'>Women</button>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/men">
                        <button className='nav-btn'>Men</button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img className='nav-img-container' src={logo} alt='GoStyle'></img>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <button className='nav-btn-right'>Contact</button>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <button className='nav-btn-right'>About</button>
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        <button className='nav-btn-right'>Login</button>
                    </Link>
                </li>
            </ul>
            
        </div>
  )
}

export default Navbar
