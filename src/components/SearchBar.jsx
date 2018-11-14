import React from 'react';

function SearchBar(){
    var styleSearchBar = {
        borderRadius: '10px',
        border: '2px solid lightBlue'
    }
    var positionSearchBar = {
        float: 'right',
        marginRight: '7%',
    }
    return(
        <div style={positionSearchBar}>
            <form>
                <label><input style={styleSearchBar} type="text" placeholder="Search"/></label>
            </form>
        </div>
    );
}
export default SearchBar;