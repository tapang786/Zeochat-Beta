'use client'

export default function Hero() {
  return (
    <aside id="zeochat-hero">
      <div className="flexslider">
        <ul className="slides">
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
                      <h2>Make Money with Your Phone {/* Wherever You Are*/}</h2>
                      <h3>
                        Stream Local Experiences <strong>LIVE</strong> and Get Paid
                      </h3>
                      <p className="amb-qualify">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-lg popup-vimeo"
                          data-toggle="modal"
                          data-target="#profile-select"
                        >
                          <span className="icon">
                            <i className="icon-shield2"></i>
                          </span>
                          Go LIVE
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
                  <h2>Your Time is Valuable</h2>
                  <h3>Earn at a rate that works for you</h3>
                  <p>
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#rate-select">
                      <span className="icon"><i className="icon-coin-dollar" style={{ fontSize: 33 }}></i></span>
                      Set My Rate
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
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
                  <h2 className="ambassador-view">Zeochats are Structured Around You</h2>
                  <h3 className="ambassador-view">Share your passions, make money and guide experiences that people will love</h3>
                  <p className="ambassador-view">
                    <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#chat-topics">
                      <span className="icon"><i className="icon-library"></i></span>
                      Select Your Passions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
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
                  <h2>This is Your New Social Network</h2>
                  <h3>Hop on a Zeochat to meet, greet, earn and do more</h3>
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
                  <h3 className="ambassador-view">Connect with real people to earn, share and have fun</h3>
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

          {/* Additional slides from legacy kept for parity */}
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
                      <h2>Monetize YOUR World {/* Wherever You Are*/}</h2>
                      <h3>
                        Stream Local Experiences <strong>LIVE</strong> and Get Paid
                      </h3>
                      <p className="amb-qualify">
                        <a href="javascript:void(0);" className="btn btn-primary btn-lg popup-vimeo" data-toggle="modal" data-target="#profile-select">
                          <span className="icon">
                            <i className="icon-shield2"></i>
                          </span>
                          Qualify as a Guide
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


