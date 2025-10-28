'use client'

export default function Footer() {
  return (
    <footer id="zeochat-footer">
      <div className="container">
        <div className="row row-pb-md animate-box">
          <div className="col-md-3 zeochat-widget">
            <h4>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                Connect
              </a>
            </h4>
            <ul className="zeochat-footer-links">
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  <i className="icon-envelope"></i> Contact Us
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  <i className="icon-location4"></i> Made in Santa Cruz, CA
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="icon-home"></i> Zeochat.com
                </a>
              </li>
              <li className="social-links">
                <a href="https://www.instagram.com/zeochat" data-toggle="modal" data-target="#profile-select">
                  <i className="icon-instagram"></i>
                </a>
                <a href="https://x.com/zeochat">
                  <i className="icon-x"></i>
                </a>
                <a href="https://www.facebook.com/zeochat">
                  <i className="icon-facebook2"></i>
                </a>
                <a href="https://www.linkedin.com/company/zeochat">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 zeochat-widget">
            <h4>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                Our Brand
              </a>
            </h4>
            <ul className="zeochat-footer-links">
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  About Us
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Our Network
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Press
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 zeochat-widget">
            <h4>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                Resources
              </a>
            </h4>
            <ul className="zeochat-footer-links">
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  How Zeochat Works
                </a>
              </li>
              <li>
                <a href="Zeochat/resources/chat-advice/index.html">Chat Advice</a>
              </li>
              <li className="ambassador-view">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Getting Paid
                </a>
              </li>
              <li className="explorer-view">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Payments
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 zeochat-widget">
            <h4>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                Integrity
              </a>
            </h4>
            <ul className="zeochat-footer-links">
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Network Safety
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Your Privacy
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Giving Back
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                  Honesty
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 zeochat-widget">
            <h4>
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                Recently Added
              </a>
            </h4>
            <div className="f-blog">
              <a
                href="#"
                className="blog-img"
                data-toggle="modal"
                data-target="#profile-select"
                onClick={(e) => e.preventDefault()}
                style={{ backgroundImage: 'url(images/intro/motorcycle_italy.jpg)', backgroundSize: 'contain' }}
              ></a>
              <div className="desc">
                <h2>
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                    Moto Tour | Rome, Italy
                  </a>
                </h2>
                <p className="admin">
                  <span>10/25/2025</span>
                </p>
              </div>
            </div>
            <div className="f-blog">
              <a
                href="#"
                className="blog-img"
                data-toggle="modal"
                data-target="#profile-select"
                onClick={(e) => e.preventDefault()}
                style={{ backgroundImage: 'url(images/intro/adventure-tree.jpg)', backgroundSize: 'contain' }}
              ></a>
              <div className="desc">
                <h2>
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                    Treetop Tours | Costa Rica
                  </a>
                </h2>
                <p className="admin">
                  <span>10/24/2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy; 2019 - 2025 &nbsp; Zeochat &nbsp; | &nbsp; All rights reserved &nbsp; | &nbsp; Made with covering love{' '}
                <i className="icon-heart" aria-hidden="true"></i> by{' '}
                <a href="https://www.brianibrown.com/" className="brian-b" target="_blank" rel="noopener noreferrer">
                  Brian Brown
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

