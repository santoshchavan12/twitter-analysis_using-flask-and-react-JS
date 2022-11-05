import React from 'react'

function NavBar() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-right">
          <img
            className="logo-img"
            src={require("../images/twitter-logo.png")}
            alt="logo"
          ></img>
          <h2>Twitter</h2>
        </div>
        <div className="nav-bar-left">
          <img
            className="search-icon"
            src={require("../images/search-icon.png")}
            alt="logo"
          ></img>
          <h4> Project</h4>
        </div>
      </nav>
    );
}

export default NavBar