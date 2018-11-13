import React from 'react';

function TweetBtn(){
    var styleTweetBtn ={
        float: 'right',
        marginRight: '5%',
        border: '2px solid lightBlue',
        borderRadius: '5px'
    }
    return(
        <div style={styleTweetBtn}>
            <button className="btn btn-light">Tweet</button>
        </div>
    )
}

export default TweetBtn;