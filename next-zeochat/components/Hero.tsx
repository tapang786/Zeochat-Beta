'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Initialize flexslider after component mounts
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$
      
      // Initialize flexslider
      $('#zeochat-hero .flexslider').flexslider({
        animation: 'fade',
        slideshowSpeed: 7500,
        directionNav: true,
        start: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
          }, 500)
        },
        before: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
          }, 500)
        }
      })

      // Handle modal open on "Start Exploring" button click
      const handleCampusSelectClick = function(e: JQuery.Event) {
        e.preventDefault()
        const modal = $('#campus-select')
        if (modal.length) {
          modal.modal('show')
        }
      }
      
      const handleChatTopicsClick = function(e: JQuery.Event) {
        e.preventDefault()
        const modal = $('#chat-topics')
        if (modal.length) {
          modal.modal('show')
        }
      }

      $(document).on('click', '[data-target="#campus-select"]', handleCampusSelectClick)
      $(document).on('click', '[data-target="#chat-topics"]', handleChatTopicsClick)

      return () => {
        $(document).off('click', '[data-target="#campus-select"]', handleCampusSelectClick)
        $(document).off('click', '[data-target="#chat-topics"]', handleChatTopicsClick)
      }
    }
  }, [])

  return (
    <aside id="zeochat-hero">
      <div className="flexslider">
        <ul className="slides">
          {/* First slide */}
          <li>
            <div
              className="fl-bg-video"
              data-video-mobile="yes"
              data-width="1280"
              data-height="720"
              data-fallback="videos/water.mp4"
              data-mp4="videos/intro/water.mp4"
              data-mp4-type="video/mp4"
              data-webm-type="video/webm"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style={{
                  backgroundImage: 'url()',
                  backgroundColor: 'transparent',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  position: 'absolute',
                  height: '1280px'
                }}
              >
                <source src="videos/water.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
                  <div className="slider-text-inner">
                    <div className="desc ambassador-view">
                      <h2>Go Anywhere. Do Anything. INSTANTLY {/* Wherever You Are*/}</h2>
                      <h3>
                      Zeochat makes the world a much smaller place
                      </h3>
                      <p className="amb-qualify">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-lg popup-vimeo"
                          data-toggle="modal"
                          data-target="#campus-select"
                        >
                          <span className="icon">
                            <i className="icon-compass2"></i>
                          </span>
                          Start Exploring
                        </a>
                      </p>
                      <p className="amb-register" style={{ display: 'none' }}>
                        <a href="ambassadors/register.html" className="btn btn-primary btn-lg popup-vimeo">
                          <span className="icon">
                            <i className="icon-shield2"></i>
                          </span>
                          Register as a Guide
                        </a>{' '}
                        <span className="qualify-confirm" style={{ display: 'none' }}>
                          <span className="icon-checkmark launch-checkmark"></span> You've Qualified
                        </span>
                      </p>
                      <div
                        className="guide-date-selection"
                        style={{
                          marginTop: 20,
                          padding: 15,
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: 8,
                          display: 'none'
                        }}
                      >
                        <label
                          style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10, display: 'block' }}
                        >
                          When would you like to stream?
                        </label>
                        <div className="form-field dropdown" style={{ position: 'relative' }}>
                          <i
                            className="icon icon-calendar"
                            style={{
                              position: 'absolute',
                              left: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: '#fff',
                              zIndex: 2
                            }}
                          ></i>
                          <div className="dropdown datepick-select">
                            <input
                              id="guideStreamDate"
                              type="text"
                              name="guide-stream-date"
                              defaultValue="Anytime"
                              className="form-control dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              readOnly
                              style={{ paddingLeft: 35, background: 'rgba(255,255,255,0.9)', color: '#333' }}
                            />
                            <div className="dropdown-menu" aria-labelledby="guideStreamDate" onClick={(e) => e.stopPropagation()}>
                              <div className="datepicker">
                                <button
                                  type="button"
                                  className="add-date btn btn-sm btn-success"
                                  onClick={() => {
                                    const open = document.querySelector('.dropdown.open')
                                    if (open && open.classList) open.classList.remove('open')
                                  }}
                                >
                                  Add Date
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* Seventh slide */}
          <li>
            <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/fireworks.mp4" data-mp4="videos/fireworks.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style={{
                  backgroundImage: 'url()',
                  backgroundColor: 'transparent',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  position: 'absolute',
                  height: '1280px'
                }}
              >
                <source src="videos/fireworks.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
                  <div className="slider-text-inner">
                    <div className="desc ambassador-view">
                      <h2>Explore YOUR World, LIVE {/* Wherever You Are*/}</h2>
                      <h3>
                      Welcome to the only network that delivers real-time global experiences tailored to YOU
                      </h3>
                      <p className="amb-qualify">
                        <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#campus-select">
                          <span className="icon">
                            <i className="icon-global"></i>
                          </span>
                          Go Global
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </li>
          {/* Second slide */}
      <li>
        <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/motorcycle.mp4" data-mp4="videos/motorcycle.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style={{
              backgroundImage: 'url()',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              height: '1280px'
            }}
          >
            <source src="videos/motorcycle.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
              <div className="slider-text-inner">
                <div className="desc ambassador-view">
                  <h2>Bring Your Wonders to Life</h2>
                  <h3>Every Zeochat connects you with real people for real experiences</h3>
                  <p>
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#rate-select">
                      <span className="icon"><i className="icon-library" ></i></span>
                      Start Your Journey
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Third slide */}
      <li className="slide-three">
        <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/surf.mp4" data-mp4="videos/surf.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style={{
              backgroundImage: 'url()',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              height: '1280px'
            }}
          >
            <source src="videos/surf.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
              <div className="slider-text-inner">
                <div className="desc">
                  <h2 className="ambassador-view">Explore Anywhere. Connect Instantly</h2>
                  <h3 className="ambassador-view">Save travel time + money by exploring places instantly with authentic local Guides</h3>
                  <p className="ambassador-view">
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#chat-topics">
                      <span className="icon"><i className="icon-bubble"></i></span>
                      Start Connecting
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Fourth slide */}
      <li>
        <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/drone.mp4" data-mp4="videos/drone.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style={{
              backgroundImage: 'url()',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              height: '1280px'
            }}
          >
            <source src="videos/drone.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
              <div className="slider-text-inner">
                <div className="desc">
                  <h2>Request An Experience or Browse Listings</h2>
                  <h3>Experiences are 100% unique at your request, or join something fun that's coming up</h3>
                  <p>
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#profile-select">
                      <span className="icon"><i className="icon-rocket"></i></span>
                      Let's Go
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Fifth slide */}
      <li>
        <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/buggy.mp4" data-mp4="videos/buggy.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style={{
              backgroundImage: 'url()',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              height: '1280px'
            }}
          >
            <source src="videos/buggy.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
              <div className="slider-text-inner">
                <div className="desc ambassador-view">
                  <h2>Go Beyond Your Social Network</h2>
                  <h3>Discover a whole new world of places, people and experiences</h3>
                  <p>
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#modal-date-select">
                      <span className="icon"><i className="icon-calendar2"></i></span>
                      Schedule Your Zeochat
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Sixth slide */}
      <li>
        <div className="fl-bg-video" data-video-mobile="yes" data-width="1280" data-height="720" data-fallback="videos/sealions.mp4" data-mp4="videos/sealions.mp4" data-mp4-type="video/mp4" data-webm-type="video/webm">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            style={{
              backgroundImage: 'url()',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              height: '1280px'
            }}
          >
            <source src="videos/sealions.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-md-offset-3 col-xs-12 col-md-pull-1 slider-text">
              <div className="slider-text-inner">
                <div className="desc">
                  <h2>Start a Zeochat Today</h2>
                  <h3 className="ambassador-view">Connect directly with real people to do real things... anywhere</h3>
                  <p className="ambassador-view">
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#profile-select">
                      <span className="icon"><i className="icon-feed intro-feed-icon"></i></span>
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

         
          
        </ul>
      </div>
    </aside>
  )
}


