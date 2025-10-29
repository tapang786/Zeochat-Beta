'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Remove hamburger menu created by JavaScript if it exists
    const existingToggle = document.querySelector('a.js-zeochat-nav-toggle.zeochat-nav-toggle.zeochat-nav-white')
    if (existingToggle && existingToggle.parentElement?.id === 'page') {
      existingToggle.remove()
    }

    const handleScroll = () => {
      const scroll = window.scrollY || window.pageYOffset
      const viewportHeight = window.innerHeight
      
      // Apply scrolled class and data attribute only when scroll reaches 100vh
      if (scroll >= viewportHeight) {
        setIsScrolled(true)
        // Set data attribute for CSS selector
        const navElement = document.querySelector('.zeochat-nav')
        if (navElement) {
          navElement.setAttribute('data-scrolled', 'true')
        }
      } else {
        setIsScrolled(false)
        // Remove data attribute
        const navElement = document.querySelector('.zeochat-nav')
        if (navElement) {
          navElement.setAttribute('data-scrolled', 'false')
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navbar content JSX (shared between normal and sticky)
  const navbarContent = (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div id="zeochat-logo">
              <a href="index.html">
                <span>Zeo</span>chat <span className="icon-feed"></span>
              </a>
              <a className="logo-beta" href="index.html">Beta</a>
            </div>
          </div>

          <div className="col-md-9 text-right menu-1"></div>
          
          <a 
            href="javascript:void(0)"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).goToTopall) {
                (window as any).goToTopall()
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="js-zeochat-nav-toggle zeochat-nav-toggle zeochat-nav-white"
          >
            <i></i>
          </a>

          <div className="menu-2">
            <ul className="item-2 explorer-view info-not-added" style={{ marginBottom: '18px' }}>
              <li className="explorer-view">
                <h2 style={{ textAlign: 'center', fontSize: '24px', marginTop: '15px', paddingBottom: '6px' }}>
                  Explorer
                </h2>
              </li>
              <li className="explorer-view">
                <button
                  className="js-zeochat-nav-toggle"
                  data-toggle="modal"
                  data-target="#profile-select"
                  style={{
                    textAlign: 'center',
                    display: 'block',
                    background: '#fff',
                    width: '50%',
                    margin: '0 auto',
                    color: '#000',
                    fontSize: '21px',
                    fontWeight: '600',
                    boxShadow: '1px 1px 3px #777',
                    padding: '18px',
                    borderRadius: '45px',
                    border: 'none'
                  }}
                >
                  Request Invite
                </button>
              </li>
            </ul>
          </div>

          <div className="float-left-position">
            <div className="col-lg-12 mb-5 mb-lg-0 position-relative">
              <div className="login-container">
                <div id="loginerror"></div>
                <h3 style={{ fontWeight: 'bold' }}>Sign In</h3>

                <form id="userloginform" onSubmit={(e) => { 
                  e.preventDefault()
                  const mainButton = document.getElementById('mainsubmitbutton') as HTMLButtonElement
                  if (mainButton) mainButton.click()
                  return false
                }}>
                  <div className="form-group fg">
                    <label>Username or email *</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username or email address" />
                  </div>

                  <div className="form-group fg" style={{ position: 'relative' }}>
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <span
                      id="togglePassword"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-30%)',
                        cursor: 'pointer',
                        fontSize: '16px',
                        color: '#555'
                      }}
                    >
                      👁️
                    </span>
                  </div>

                  <div className="remember">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>

                  <button
                    className="btn btn-primary btn-primary1"
                    onClick={() => {
                      const mainButton = document.getElementById('mainsubmitbutton') as HTMLButtonElement
                      if (mainButton) mainButton.click()
                    }}
                  >
                    Sign In
                  </button>
                </form>

                <a href="https://zeochat.com/user/password/request" className="forgot">
                  Forgot Password?
                </a>

                <div className="divider">or sign in using</div>

                <div className="social-login">
                  <div className="btn btn-white social-btn">
                    <a href="#">
                      <img src="/images/ic_google.png" alt="Google" /> Google
                    </a>
                  </div>
                  <div className="btn btn-white social-btn">
                    <a href="#">
                      <img src="/images/ic_facebook.png" alt="Facebook" /> Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-4">
            <footer>
              <ul className="item-4">
                <li><a href="javascript:void(0);">About Us</a></li>
                <li><a href="javascript:void(0);">Contact</a></li>
                <li><a href="javascript:void(0);">Press</a></li>
                <li><a href="javascript:void(0);">Our Mission</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <nav 
      className={`zeochat-nav guest ${isScrolled ? 'scrolled' : ''}`}
      data-scrolled={isScrolled ? 'true' : 'false'}
      role="navigation"
    >
      <div className="top-menu">
        {navbarContent}
      </div>
    </nav>
  )
}
