'use client'

export default function Services() {
  return (
    <div id="zeochat-services" style={{ paddingTop: '5em' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3>
              <span className="icon-bubbles2" style={{ fontSize: '30px', color: '#fff', background: '#F1D128', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>
              I would like to connect for{' '}
              <strong className="connect-for" style={{ borderBottom: '2px solid #F1D128', display: 'inline-block', width: '282px', height: '48px', textAlign: 'center' }}>
                <strong id="paths">General Topics</strong>
              </strong>{' '}
              <strong>Zeochats</strong>
              <strong className="select-below" style={{ fontWeight: 'normal', fontSize: '21px' }}> (select below)</strong>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 services-wrap">
            <div className="row">
              {/* Tour Section */}
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services spotlight admissions-advice">
                  <input type="checkbox" className="checkbox" value="Tour" id="take_Tour" name="interestcategory" />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-computer-graphic"></i>
                  </span>
                  <div className="desc">
                    <h3>Tours</h3>
                  </div>
                </div>
              </div>

              {/* Adventure Section */}
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services spotlight course-major-insights">
                  <input type="checkbox" className="checkbox" value="Adventure" id="take_Adventure" name="interestcategory" />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-layers"></i>
                  </span>
                  <div className="desc">
                    <h3>Adventures</h3>
                  </div>
                </div>
              </div>

              {/* Shopping Section */}
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services spotlight campus-tours">
                  <input type="checkbox" className="checkbox" id="take_Shopping" name="interestcategory" value="Shopping" />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-smartphone"></i>
                  </span>
                  <div className="desc">
                    <h3>Shopping</h3>
                  </div>
                </div>
              </div>

              {/* Concert & Festival Section */}
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div className="services spotlight student-chats">
                  <input type="checkbox" className="checkbox" id="take_Concert&Festival" name="interestcategory" value="Concert&Festival" />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-desktop"></i>
                  </span>
                  <div className="desc">
                    <h3>Concerts & Festivals</h3>
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

