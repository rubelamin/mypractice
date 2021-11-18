import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <p onClick={showSidebar}>Menu</p>
            </Link>
            
        </div>
    </>
}

export default Navbar;