import React from "react";
//import PropTypes from "prop-types";
import Header from './Header';
// import HorizontalRow from './HorizontalRow';
import Feed from './Feed';

function App(){
  var styles = {
  }
  return (
    <div style={styles}>
    <Header/>
    <Feed/>
    {/* <HorizontalRow/> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
