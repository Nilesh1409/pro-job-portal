/* eslint-disable */
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="widget"></div>
            </div>
            <div className="col-lg-6 col-md-4 col-xs-12">
              <div className="widget">
                <h3 className="block-title">Quick Links</h3>
                <ul className="menu">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-12">
              <div className="widget">
                <ul className="mt-3 footer-social">
                  <li>
                    <a
                      className="facebook"
                      target="_blank"
                      href="https://www.facebook.com/proconsultantmh"
                    >
                      <i className="lni-facebook-filled " />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" target="_blank" href="#">
                      <i className="lni-twitter-filled" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/company/m-s-pro-consultant/"
                    >
                      <i className="lni-linkedin-fill" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="google-plus"
                      target="_blank"
                      href="mailto:proconsultant.hr@gmail.com"
                    >
                      <i className="lni-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
