'use client'

export default function Marketplace() {
  return (
    <div id="zeochat-event" className="zeochat-event">
      <div className="container">
        <div className="row">
          <div className="col-md-5 row-pb-md">
            <div className="row">
              <div className="col-md-12 zeochat-heading animate-box" style={{ marginBottom: '1em' }}>
                <h3 style={{ textAlign: 'center' }}>
                  Market <span className="icon-bubbles2"></span>
                </h3>
                <h4 className="explorer-view" style={{ textAlign: 'center', fontSize: '21px' }}>
                  Explore Upcoming Zeochats
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Event Entry 1 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Tours</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>28</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Tour of Bankok, Thailand
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="#" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person14_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          Luke M.
                        </a>
                      </span>
                      <span className="price-container">
                        <a href="explorers/register/index.html" className="market-price" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          $68
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Event Entry 2 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Adventures</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>30</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="#" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Diving in Fiji
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="explorers/register/index.html" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person13_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          Christina M.
                        </a>
                      </span>
                      <span className="price-container">
                        <a href="#" className="market-price" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          $91
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Event Entry 3 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Concerts & Festivals</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>31</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="#" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Festival Time!
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="#" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person17_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          James Y.
                        </a>
                      </span>
                      <span className="price-container">
                        <a href="#" className="market-price" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          $48
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Event Entry 4 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Adventures</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>01</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Hike the Lost Coast
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="#" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person15_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          Justine W.
                        </a>
                      </span>
                      <span className="price-container">
                        <a href="#" className="market-price" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          $57
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Event Entry 5 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Adventures</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>02</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="#" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Deep Sea Fishing
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="#" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person18_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="#">Jimmy P.</a>
                      </span>
                      <span className="price-container">
                        <a href="#" className="market-price">
                          $60
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Event Entry 6 */}
                <div className="event-entry animate-box">
                  <div className="desc" style={{ paddingLeft: '54px' }}>
                    <p style={{ marginBottom: '0px' }}>Tours</p>
                    <p className="meta">
                      <span className="day" style={{ textTransform: 'none' }}>02</span>
                      <span className="month">Oct</span>
                    </p>
                    <h2>
                      <a href="#" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                        Tour of San Francisco, CA
                      </a>
                    </h2>
                  </div>
                  <div className="location">
                    <a href="#" className="callout-price offer btn-primary" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                      Join
                    </a>
                    <div className="figure-img" style={{ backgroundImage: 'url(images/person16_90x90.jpg)' }}></div>
                    <p className="organizer">
                      <span className="market-user-type">Guide</span>
                      <span>
                        <a href="explorers/register/index.html" data-toggle="modal" data-target="#profile-select" onClick={(e) => e.preventDefault()}>
                          Megan C.
                        </a>
                      </span>
                      <span className="price-container">
                        <a href="#" className="market-price">
                          $55
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Explore More Button */}
                <div className="row">
                  <div className="col-md-12 text-center animate-box">
                    <h2>
                      <a
                        href="chat/market.html"
                        className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
                        style={{ fontWeight: 500 }}
                        data-toggle="modal"
                        data-target="#profile-select"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="icon">
                          <i className="icon-bubbles2"></i>
                        </span>{' '}
                        Explore More
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Buzz Section */}
          <div className="col-md-7 row-pb-md">
            <div className="row">
              <div className="col-md-12 zeochat-heading animate-box" style={{ marginBottom: '1em' }}>
                <h3 style={{ textAlign: 'center' }}>
                  Buzz <span className="icon-power"></span>
                </h3>
                <h4 style={{ textAlign: 'center', fontSize: '21px' }}>
                  Recent Zeochat Highlights
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Buzz Entry 1 */}
                <div className="block-21 d-flex animate-box">
                  <a href="javascript:void(0);" className="blog-img" style={{ backgroundImage: 'url(images/intro/balloons.jpg)' }}></a>
                  <div className="text">
                    <h3 className="heading" style={{ marginBottom: '3px' }}>
                      Hot Air Balloon Tour!
                    </h3>
                    <h5>
                      Explorer{' '}
                      <a href="javascript:void(0);">
                        <span className="icon-user2"></span> Peter K's
                      </a>{' '}
                      Live Video Chat
                    </h5>
                    <p>
                      "I joined an incredible sunset hot air baloon ride. It was such a fun live video chat and I know for sure that I'd like to do this in person now. I'm so happy to have discovered Zeochat!!"
                    </p>
                    <div className="meta">
                      <div>
                        <span className="icon-user2"></span> Guide: <a href="javascript:void(0);">Peter K.</a>
                      </div>
                      <div>
                        <span className="icon-calendar"></span> Chat Date: 10/25/2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buzz Entry 2 */}
                <div className="block-21 d-flex animate-box">
                  <a href="javascript:void(0);" className="blog-img" style={{ backgroundImage: 'url(images/intro/st_peters_vatican.jpg)' }}></a>
                  <div className="text">
                    <h3 className="heading" style={{ marginBottom: '3px' }}>
                      Light a Prayer Candle
                    </h3>
                    <h5>
                      Explorer{' '}
                      <a href="javascript:void(0);">
                        <span className="icon-user2"></span> Laura B's
                      </a>{' '}
                      Live Video Chat
                    </h5>
                    <p>
                      "I asksed my Italia Guide to light a prayer candle for my mom &amp; dad at St. Peter's Basilica in Vatican City. It was meaningful beyond words. I'll cherish this experience and save my video forever!"
                    </p>
                    <div className="meta">
                      <div>
                        <span className="icon-user2"></span> Guide: <a href="javascript:void(0);">Laura B.</a>
                      </div>
                      <div>
                        <span className="icon-calendar"></span> Chat Date: 10/24/2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buzz Entry 3 */}
                <div className="block-21 d-flex animate-box">
                  <a href="javascript:void(0);" className="blog-img" style={{ backgroundImage: 'url(images/intro/prague_clock.jpg)' }}></a>
                  <div className="text">
                    <h3 className="heading" style={{ marginBottom: '3px' }}>
                      Tour of Prague
                    </h3>
                    <h5>
                      Explorer{' '}
                      <a href="javascript:void(0);">
                        <span className="icon-user2"></span> Frank R's
                      </a>{' '}
                      Live Voice Chat
                    </h5>
                    <p>
                      "I've always wanted to explore Prague. This tour helped me decide where to go before I arrive. My Guide was a total pro and showed me parts of Prague that I'd never disover on my own."
                    </p>
                    <div className="meta">
                      <div>
                        <span className="icon-user2"></span> Guide: <a href="javascript:void(0);">Frank R.</a>
                      </div>
                      <div>
                        <span className="icon-calendar"></span> Chat Date: 10/23/2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buzz Entry 4 */}
                <div className="block-21 d-flex animate-box">
                  <a href="javascript:void(0);" className="blog-img" style={{ backgroundImage: 'url(images/intro/bike.jpg)' }}></a>
                  <div className="text">
                    <h3 className="heading" style={{ marginBottom: '0px' }}>
                      Mountain Biking Adventure
                    </h3>
                    <h5>
                      Explorer{' '}
                      <a href="javascript:void(0);">
                        <span className="icon-user2"></span> Zoe R's
                      </a>{' '}
                      Live Video Chat
                    </h5>
                    <p>
                      "I went along for a wild ride through a coastal redwood forest in California. It was fast-paced and we stopped at several lookout points along the way. Such stunning views!"
                    </p>
                    <div className="meta">
                      <div>
                        <span className="icon-user2"></span> Guide: <a href="javascript:void(0);">Zoe R.</a>
                      </div>
                      <div>
                        <span className="icon-calendar"></span> Chat Date: 10/23/2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="row">
                  <div className="col-md-12 text-center animate-box">
                    <h2>
                      <a
                        href="chat/buzz.html"
                        className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
                        style={{ fontWeight: 500 }}
                        data-toggle="modal"
                        data-target="#profile-select"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="icon">
                          <i className="icon-power"></i>
                        </span>{' '}
                        Read More
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

