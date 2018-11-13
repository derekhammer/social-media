import React from 'react';

function NavBar(){
    var navStyle = {
        display: 'inline-block',
        border: '2px solid gray',
        marginLeft: '-2px',
        padding: '10px 10px 10px 10px'
    }
    return(
        <div>
            <ul>
                <li style={navStyle}>Home</li>
                <li style={navStyle}>Notifications</li>
                <li style={navStyle}>Messages</li>
            </ul>
        </div>
    )
}

export default NavBar;