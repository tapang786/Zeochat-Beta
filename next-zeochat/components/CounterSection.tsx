'use client'

export default function CounterSection() {
  return (
    <div id="zeochat-counter" className="zeochat-counters">
      <div className="container">
        <div className="col-md-5">
          <div className="about-desc">
            <div className="about-img-1 animate-box" style={{ backgroundImage: 'url(images/intro/phone-boat.jpg)' }}></div>
            <div className="about-img-2 animate-box" style={{ backgroundImage: 'url(images/intro/happy-guy.jpg)' }}></div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12 zeochat-heading animate-box" style={{ marginBottom: '1em' }}>
              <h3>
                <span className="icon-feed"></span> <strong style={{ fontSize: '39px' }}>Zeochat is</strong>
                <br />
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box intro-lines" style={{ fontSize: '24px' }}>
              <p className="explorer-view" style={{ fontWeight: 'bold', fontSize: '39px' }}>
                Your global experiences platform
              </p>
              <p className="explorer-view">
                We help you <strong>do things across the globe in real-time</strong>.
              </p>
              <p className="explorer-view">
                Explore interactive, guide-driven Zeochats that are tailored to <strong>YOU</strong> at convenient times and prices.
              </p>
              <p className="explorer-view">
                <strong>Request or join experiences from anywhere</strong>.
              </p>
            </div>
            <div className="col-md-12 col-sm-12 animate-box">
              <div className="counter-entry">
                <div className="desc">
                  <span className="zeochat-counter js-counter" data-from="0" data-to="120" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="zeochat-counter-label">Experiences</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 animate-box">
              <div className="counter-entry">
                <div className="desc">
                  <span className="zeochat-counter js-counter" data-from="0" data-to="302" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="zeochat-counter-label">Guides</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 animate-box">
              <div className="counter-entry">
                <div className="desc">
                  <span className="zeochat-counter js-counter" data-from="0" data-to="1061" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="zeochat-counter-label">Explorers</span>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 animate-box">
              <div className="counter-entry">
                <div className="desc">
                  <h3 style={{ marginTop: '39px', color: '#777' }}>
                    <span className="explorer-view" style={{ fontSize: '30px' }}>
                      <i className="icon-quotes-left" style={{ verticalAlign: 'super' }}></i> Zeochat brings you the WORLD. Instantly.{' '}
                      <i className="icon-quotes-right" style={{ verticalAlign: 'super' }}></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

