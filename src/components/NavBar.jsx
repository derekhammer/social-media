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
                <button style={navStyle}>Home</button>
                <button style={navStyle}>Notifications</button>
                <button style={navStyle}>Messages</button>
            </ul>
        </div>
    )
}

export default NavBar;