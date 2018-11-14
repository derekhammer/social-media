import React from "react";

function ProfileColorBlock(){
    var Style = {
        backgroundColor: 'blue',
        width: '200px',
        height: '100px',
        margin: '3%',
        marginTop: '5%',
        position: 'absolute'
    }
    return(
        <div style={Style}></div>
    );
}

export default ProfileColorBlock;