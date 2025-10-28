'use client'

export default function Guides() {
  return (
    <div id="zeochat-trainers">
      <div className="container">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3>
              <span
                className="icon-shield2"
                style={{
                  fontSize: '39px',
                  color: '#fff',
                  background: '#F1D128',
                  boxShadow: '1px 1px 1px #000',
                  textShadow: '1px 1px 1px #777',
                  padding: '21px',
                  borderRadius: '50%',
                  marginRight: '12px',
                }}
              ></span>
              {' '}Meet Our Guides
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-3 animate-box">
            <div className="trainers-entry">
              <div className="desc">
                <h3>Olivia Y.</h3>
                <span>Fashion &amp; Shopping Expert | Milan, Italy</span>
              </div>
              <div
                className="trainer-img"
                style={{ backgroundImage: 'url(images/intro/ladyphone.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 animate-box">
            <div className="trainers-entry">
              <div className="desc">
                <h3>Daniel A.</h3>
                <span>Surfer | Santa Cruz, CA</span>
              </div>
              <div
                className="trainer-img"
                style={{ backgroundImage: 'url(images/intro/wetsuitbro.jpg)' }}
              ></div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 animate-box">
            <div className="trainers-entry">
              <div className="desc">
                <h3>Brenda H.</h3>
                <span>Snowboarder | Whistler, BC</span>
              </div>
              <div
                className="trainer-img"
                style={{ backgroundImage: 'url(images/intro/snowbunny.jpg)', backgroundPosition: '0 -51px' }}
              ></div>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 animate-box">
            <div className="trainers-entry">
              <div className="desc">
                <h3>David B.</h3>
                <span>Passionate about Greece | Greek Islands</span>
              </div>
              <div
                className="trainer-img"
                style={{ backgroundImage: 'url(images/intro/dudephone.jpg)' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center animate-box">
            <h2>
              <a
                href="#"
                className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo"
                style={{ fontWeight: 500 }}
                data-toggle="modal"
                data-target="#profile-select"
                onClick={(e) => e.preventDefault()}
              >
                <span className="icon">
                  <i className="icon-shield2"></i>
                </span>{' '}
                Meet More
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
