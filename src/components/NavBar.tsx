import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';



export default function Navbar() {
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