import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div>
        <div>
            SM Hostel
        </div>
        <div>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/services"> Services</Link>

            <Link to="/contact"> Contact</Link>

        </div>
    </div>
  )
}

export default Header


