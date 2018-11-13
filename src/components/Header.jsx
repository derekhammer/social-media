import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import TweetBtn from './TweetBtn';

function Header(){
    var styleNavBar = {
        position: 'fixed'
    }
    var styleTweetSearch = {
        margin: '2%'
    }
    return(
        <div>
            <div style = {styleNavBar}> 
                <NavBar/>
            </div>
            <div style = {styleTweetSearch}>
                <TweetBtn/>
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header;