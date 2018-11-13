import React from 'react';

function SearchBar(){
    var styleSearchBar = {
        float: 'right',
        marginRight: '7%',
        borderRadius: '10px',
        border: '2px solid lightBlue'
    }
    return(
        <div style={styleSearchBar}>
            <form>
                <label><input type="text" placeholder="Search"/></label>
            </form>
        </div>
    );
}
export default SearchBar;