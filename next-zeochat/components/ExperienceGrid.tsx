'use client'

export default function ExperienceGrid() {
  return (
    <div id="zeochat-campuses" className="zeochat-classes">
      <div className="container">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3>
              <span className="loader__dot alt__dot"></span>
              <span className="icon-compass2" style={{ fontSize: '39px', color: '#fff', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', background: '#F1D128', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>{' '}
              Explorers are Zeochatting about these experiences, <strong>LIVE</strong>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 animate-box" data-value="Tour of Rome">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Tour of Rome" />
                <img className="classes-img" src="images/intro/trevi.jpg" alt="Rome" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus">
                      <a href="javascript:void(0);">Tour of Rome</a>
                    </h2>

                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">
                                I'd like to chat about{' '}
                                <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">
                                  ?
                                </a>
                              </li>
                              <li className="divider"></li>
                              <li>
                                <label>
                                  <input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />
                                  15 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />
                                  30 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />
                                  45 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />
                                  60 Minutes
                                </label>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="add-topics btn btn-sm btn-success"
                                  onClick={() => {
                                    const open = document.querySelector('.form-field.open')
                                    if (open && open.classList) open.classList.remove('open')
                                  }}
                                >
                                  Add
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 no-pad" style={{ paddingTop: '3px' }}>
                        <div className="form-container form-group">
                          <div className="form-field dropdown">
                            <div className="dropdown">
                              <i className="icon icon-calendar"></i>
                              <input
                                id="dropdownMenuButton1"
                                type="text"
                                name="date"
                                defaultValue="Date Select"
                                className="form-control dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                readOnly
                              />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onClick={(e) => e.stopPropagation()}>
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

                  <div className="chat-cta pricing">
                    <div className="row">
                      <div className="col-md-10">
                        <ul>
                          <li>
                            Tours start @{' '}
                            <a href="javascript:void(0);">
                              <span className="price">$141</span>
                            </a>
                          </li>
                          <li className="location">
                            Live from <a href="javascript:void(0);">Rome, Italy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">
                          Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

