import React from "react";

const Footer = () => (
  <footer className="footer">
    <center>
      <div className="footer-copyright">
        Copyright © 2015 - 2019 by Thada Wangthammang
      </div>
      <div className="footer-info">Powered by React & Wordpress</div>

      <div className="footer-footer-user-links">
        <a className="footer-user-link" href="https://github.com/mildronize">
          <i className="fab fa-github"></i>
        </a>
        <a className="footer-user-link" href="https://twitter.com/mildronize">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="footer-user-link"
          href="https://www.linkedin.com/in/thada-wangthammang-281894a6"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="footer-user-link" href="mailto:thada.w@psu.ac.th">
          <i className="fas fa-envelope"></i>
        </a>
        <a className="footer-user-link" href="https://medium.com/@mildronize">
          <i className="fab fa-medium"></i>
        </a>
        {/* <a
     class="footer-user-link" href="/rss.xml"><i class="fas fa-rss"></i></a> */}
      </div>
    </center>
  </footer>
);

export default Footer;
