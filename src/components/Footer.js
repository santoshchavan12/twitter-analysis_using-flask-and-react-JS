import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="ftr-imgs">
        <a href="https://www.instagram.com/santhosh_chouhan/">
          <img
            className="footer-img"
            src={require("../images/instagram.png")}
            alt="instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/santosh-chavan5/">
          <img
            className="footer-img"
            src={require("../images/linkedin.png")}
            alt="linkedin"
          />
        </a>
        <a href="https://twitter.com/Santosh03129655">
          <img
            className="footer-img"
            src={require("../images/twitter.png")}
            alt="twitter"
          />
        </a>

        <a href="https://github.com/santoshchavan12">
          <img
            className="footer-img"
            src={require("../images/github.png")}
            alt="github"
          />
        </a>
      </div>
      <div className="ftr-heading">
        <small>Mail me @santhusyc123@gmail.com</small>
        <br></br>
      </div>
    </div>
  );
}

export default Footer