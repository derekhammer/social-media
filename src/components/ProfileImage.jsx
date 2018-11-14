import React from "react";

function ProfileImage(){
    var Style = {
        backgroundColor: 'blue',
        border: 'solid white 4px',
        width: '60px',
        height: '60px',
        borderRadius: '15px',
        position: 'absolute',
        margin: '10%',
        marginLeft: '4%'
    }
    var imgStyle = {
        width: '45px',
        height: '45px'
    }
    return(
        <div style={Style}>
        <img style={imgStyle} src="https://www.emojiok.com/resolution/static/img/emoji/wind/20170529/1f335.png"></img>
        </div>
    );
}

export default ProfileImage;