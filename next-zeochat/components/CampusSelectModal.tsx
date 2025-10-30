'use client'

export default function CampusSelectModal() {
  return (
    <div id="campus-select" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true" style={{ display: 'none' }}>
      <div className="modal-dialog modal-lg" style={{ width: '93%' }}>
        <div className="modal-content">
          <div className="modal-header animate-box">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row">
              <div className="col-md-12 zeochat-heading center-heading text-center" style={{ marginBottom: '0px' }}>
                <h3 className="h3-select-campus">
                  <i className="icon icon-compass2"></i> Featured Experiences
                </h3>
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <div id="modal-campuses" className="container">
                    <div className="row campus-select-modal">
                      {/* Tour of Rome */}
                      <div className="col-md-4 animate-box" data-value="Tour of Rome" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/trevi.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Tour of Rome</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Tours start @ <span className="price">$118</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>Rome, Italy</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Shopping in NYC */}
                      <div className="col-md-4 animate-box" data-value="Shopping in NYC" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/nyc1.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Shopping in NYC</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Shopping trips start @ <span className="price">$100</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>New York City, New York</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Grand Canyon Drone Tour */}
                      <div className="col-md-4 animate-box" data-value="Grand Canyon Drone Tour" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/grand_canyon.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Grand Canyon Drone Tour</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Tours start @ <span className="price">$123</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>Grand Canyon National Park</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tour of Bali */}
                      <div className="col-md-4 animate-box" data-value="Tour of Bali" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/bali.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Tour of Bali</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Tours start @ <span className="price">$112</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>Bali, Indonesia</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lamborghini Ride in Vegas */}
                      <div className="col-md-4 animate-box" data-value="Lamborghini Ride in Vegas" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/lambo.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Lamborghini Ride in Vegas</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Rides start @ <span className="price">$99</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>Las Vegas, Nevada</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wave Watching */}
                      <div className="col-md-4 animate-box" data-value="Surf Report / Wave Watching" data-dismiss="modal">
                        <div className="classes campuses">
                          <a href="#" onClick={(e)=>e.preventDefault()}>
                            <div className="classes-img" style={{ backgroundImage: 'url(images/intro/surf.jpg)' }}></div>
                          </a>
                          <div className="wrap">
                            <div className="desc">
                              <h2 className="campus">
                                <a href="#" onClick={(e)=>e.preventDefault()}>Wave Watching</a>
                              </h2>
                            </div>
                            <div className="pricing">
                              <ul>
                                <li>
                                  Watch start @ <span className="price">$28</span>
                                </li>
                                <li className="location">
                                  Live from <a href="#" onClick={(e)=>e.preventDefault()}>Santa Cruz, CA</a>{' '}
                                  <span className="more">
                                    <a href="#" onClick={(e)=>e.preventDefault()}>
                                      <i className="icon-link"></i>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="all-campuses" className="all-campuses" style={{ display: 'none' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer" style={{ borderTop: 'none' }}>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

