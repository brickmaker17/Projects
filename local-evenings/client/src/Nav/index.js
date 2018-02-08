import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/about">About</Link>
            {/* <Add/> */}
        </div>
    )
}

export default Nav;