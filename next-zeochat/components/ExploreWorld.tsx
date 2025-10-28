'use client'

export default function ExploreWorld() {
  return (
    <div className="zeochat-classes">
      <div className="container-fluid owl-theme">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3 className="explorer-view">
              <span className="icon-library" style={{ fontSize: '39px', color: '#fff', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', background: '#F1D128', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>{' '}
              Explore <strong>YOUR WORLD</strong> like never before
            </h3>
          </div>
        </div>
        <div className="row" id="c1">
          <div className="col-md-12 animate-box">
            <div className="owl-carousel">
              <div className="item">
                <div className="classes">
                  <form id="form_one" className="zeochat-form" data-value="African Safari">
                    <input type="hidden" name="campus" value="African Safari" />
                    <input type="hidden" name="chat-select" value="Adventures" />
                    <input type="hidden" name="date" value="11/04/2025" />
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                      <div className="classes-img" style={{ backgroundImage: 'url(images/intro/lion.jpg)' }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                            African Safari
                          </a>
                        </h2>
                        <h4>This Adventure chat includes</h4>
                        <ul>
                          <li>
                            <span className="icon-users"></span>A Jeep ride into the African Savannah
                          </li>
                          <li>
                            <span className="icon-chat"></span>Big cats, elephants, wildebeest
                          </li>
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                $247
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="loader__dot">LIVE</span> on 11/04/2025 &nbsp;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                            11:00am (PST) &rarr;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              Join Waitlist
                            </a>
                          </li>
                          <li>
                            by{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-user2"></span> The Guide of Africa
                            </a>
                            <span className="more">
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="item">
                <div className="classes">
                  <form id="form_two" className="zeochat-form" data-value="Tour of Tokyo">
                    <input type="hidden" name="campus" value="Tour of Tokyo" />
                    <input type="hidden" name="chat-select" value="Adventures" />
                    <input type="hidden" name="date" value="11/04/2025" />
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                      <div className="classes-img" style={{ backgroundImage: 'url(images/intro/tokyo1.jpg)' }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Tour of Tokyo</a>
                        </h2>
                        <h4>This Tour chat includes</h4>
                        <ul>
                          <li>
                            <span className="icon-users"></span>A walking tour &amp; chat
                          </li>
                          <li>
                            <span className="icon-chat"></span>Covering Tokyo's popular districts
                          </li>
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">$68</a>
                            </span>
                          </li>
                          <li>
                            <span className="loader__dot">LIVE</span> on 11/04/2025 &nbsp;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                            1:00pm (PST) &rarr;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Join Waitlist</a>
                          </li>
                          <li>
                            by{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-user2"></span> Your Guide in Japan
                            </a>
                            <span className="more">
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="item">
                <div className="classes">
                  <form id="form_three" className="zeochat-form" data-value="Skydive">
                    <input type="hidden" name="campus" value="Skydive" />
                    <input type="hidden" name="chat-select" value="Adventures" />
                    <input type="hidden" name="date" value="11/04/2025" />
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                      <div className="classes-img" style={{ backgroundImage: 'url(images/intro/skydive.jpg)' }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Skydiving</a>
                        </h2>
                        <h4>This Adventure chat includes</h4>
                        <ul>
                          <li>
                            <span className="icon-users"></span>Skydiving!
                          </li>
                          <li>
                            <span className="icon-chat"></span>18,000 ft drop from our airplane
                          </li>
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">$47</a>
                            </span>
                          </li>
                          <li>
                            <span className="loader__dot">LIVE</span> on 11/04/2025 &nbsp;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                            3:00pm (PST) &rarr;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Join Waitlist</a>
                          </li>
                          <li>
                            by{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-user2"></span> The Skydiving Guide
                            </a>
                            <span className="more">
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="item">
                <div className="classes">
                  <form id="form_four" className="zeochat-form" data-value="Kiteboarding">
                    <input type="hidden" name="campus" value="Kiteboarding" />
                    <input type="hidden" name="chat-select" value="Adventures" />
                    <input type="hidden" name="date" value="11/05/2025" />
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                      <div className="classes-img" style={{ backgroundImage: 'url(images/intro/kiteboarding.jpg)' }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Kiteboarding</a>
                        </h2>
                        <h4>This Adventure chat includes</h4>
                        <ul>
                          <li>
                            <span className="icon-users"></span> Ride the wind &amp; waves with me
                          </li>
                          <li>
                            <span className="icon-chat"></span> Live from Turks & Caicos
                          </li>
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">$53</a>
                            </span>
                          </li>
                          <li>
                            <span className="loader__dot">LIVE</span> on 11/05/2025 &nbsp;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                            10:00am (PST) &rarr;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Join Waitlist</a>
                          </li>
                          <li>
                            by{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-user2"></span> Your Kitesurfing Guide
                            </a>
                            <span className="more">
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="item">
                <div className="classes">
                  <form id="form_five" className="zeochat-form" data-value="Wildflower Collecting">
                    <input type="hidden" name="campus" value="Wildflower Collecting" />
                    <input type="hidden" name="chat-select" value="Adventures" />
                    <input type="hidden" name="date" value="11/04/2025" />
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                      <div className="classes-img" style={{ backgroundImage: 'url(images/intro/wildflowers.jpg)' }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Wildflower Collecting</a>
                        </h2>
                        <h4>This Adventure chat includes</h4>
                        <ul>
                          <li>
                            <span className="icon-users"></span>Let's collect wildflowers
                          </li>
                          <li>
                            <span className="icon-chat"></span>I'll ship your favorites to you!
                          </li>
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">$46</a>
                            </span>
                          </li>
                          <li>
                            <span className="loader__dot">LIVE</span> on 11/04/2025 &nbsp;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                            3:00pm (PST) &rarr;{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">Join Waitlist</a>
                          </li>
                          <li>
                            by{' '}
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                              <span className="icon-user2"></span> A Wildflower Guide
                            </a>
                            <span className="more">
                              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

