'use client'

import { useEffect } from 'react'

export default function ExperienceGrid() {
  useEffect(() => {
    // Wait for scripts to load, then initialize datepicker
    const initDatepicker = () => {
      const w: any = window
      const $ = w.jQuery || w.$
      
      if ($ && $.fn && $.fn.datepicker) {
        try {
          // Initialize datepicker on the datepicker div
          $('.classes .datepicker').datepicker({
            minDate: new Date(),
            onSelect: function(dateText: string) {
              // Find the input field and update it
              const inputField = $(this).closest('.dropdown').find('input[type="text"]')
              inputField.val(dateText).css('border', '2px solid #0081ff')
              
              // Close the dropdown
              const open = document.querySelector('.classes .dropdown.open')
              if (open && open.classList) open.classList.remove('open')
            }
          })
          
          // Set high z-index for datepicker
          $('.ui-datepicker').css('z-index', 10000)
          
          console.log('Datepicker initialized successfully')
        } catch (e) {
          console.log('Datepicker init error:', e)
        }
      } else {
        console.log('jQuery UI not ready yet')
      }
    }

    // Try immediately
    initDatepicker()
    
    // Also try after a delay to ensure scripts are loaded
    const timer = setTimeout(initDatepicker, 2000)
    
    return () => clearTimeout(timer)
  }, [])

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
          <div className="col-md-4 animate-box" data-value="Shopping in NYC">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Shopping in NYC" />
                <img className="classes-img" src="images/intro/nyc.jpg" alt="Shopping in NYC" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Shopping in NYC</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li>
                                <button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button>
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
                              <input id="dropdownMenuButton2" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"></div>
                                <button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button>
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
                          <li>Shopping starts @ <a href="javascript:void(0);"><span className="price">$111</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">New York City, New York</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-value="Grand Canyon Drone Tour">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Grand Canyon Drone Tour" />
                <img className="classes-img" src="images/intro/grand_canyon.jpg" alt="Grand Canyon Drone Tour" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Grand Canyon Drone Tour</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field topic-select">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton3" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Tours start @ <a href="javascript:void(0);"><span className="price">$120</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">Grand Canyon National Park, AZ</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* =================== TOUR OF BALI =================== */}
          <div className="col-md-4 animate-box" data-value="Tour of Bali">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Tour of Bali" />
                <img className="classes-img" src="images/intro/bali.jpg" alt="Tour of Bali" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Tour of Bali</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton4" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton4" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Tours start @ <a href="javascript:void(0);"><span className="price">$118</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">Bali, Indonesia</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* =================== LAMBORGHINI VEGAS =================== */}
          <div className="col-md-4 animate-box" data-value="Lamborghini Ride in Vegas">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Lamborghini Ride in Vegas" />
                <img className="classes-img" src="images/intro/lambo.jpg" alt="Lamborghini Ride in Vegas" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Lamborghini Ride in Vegas</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton5" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton5" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Rides start @ <a href="javascript:void(0);"><span className="price">$147</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">Las Vegas, NV</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* =================== WAVE WATCHING =================== */}
          <div className="col-md-4 animate-box" data-value="Wave Watching">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Wave Watching" />
                <img className="classes-img" src="images/intro/surf.jpg" alt="Wave Watching & Surf Chat" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Wave Watching &amp; Surf Chat</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton6" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton6" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Surf chat starts @ <a href="javascript:void(0);"><span className="price">$22</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">Santa Cruz, CA</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* =================== FALCON FLIGHT CAM =================== */}
          <div className="col-md-4 animate-box" data-value="Falcon Flight Cam">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Falcon Flight Cam" />
                <img className="classes-img" src="images/intro/falcon.jpg" alt="Falcon Flight Cam" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Falcon Flight Cam</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton7" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton7" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Flights start @ <a href="javascript:void(0);"><span className="price">$97</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">Marysville, CA</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 animate-box" data-value="Scuba Diving Adventure">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="Scuba Diving Adventure" />
                <img className="classes-img" src="images/intro/diving.jpg" alt="Scuba Diving Adventure" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">Scuba Adventure</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton13" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton13" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Dives start @ <a href="javascript:void(0);"><span className="price">$132</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">French Polynesia</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 animate-box" data-value="White Water Kayaking">
            <div className="classes campuses">
              <form action="javascript:void(0);" method="post" className="zeochat-form">
                <input type="hidden" name="campus" value="White Water Kayaking" />
                <img className="classes-img" src="images/intro/kayaking.jpg" alt="White Water Kayaking" />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus"><a href="javascript:void(0);">White Water Kayaking</a></h2>
                    <div className="row">
                      <div className="col-md-12 no-pad">
                        <div className="form-container form-group topic-select">
                          <div className="form-field">
                            <i className="icon icon-bubbles2"></i>
                            <input name="chat-select" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" autoComplete="off" readOnly />
                            <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd like to chat about <a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a></li>
                              <li className="divider"></li>
                              <li><label><input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes" />30 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes" />45 Minutes</label></li>
                              <li><label><input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes" />60 Minutes</label></li>
                              <li><button type="button" className="add-topics btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.form-field.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add</button></li>
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
                              <input id="dropdownMenuButton15" type="text" name="date" defaultValue="Date Select" className="form-control dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" readOnly />
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton15" onClick={(e) => e.stopPropagation()}>
                                <div className="datepicker"><button type="button" className="add-date btn btn-sm btn-success" onClick={() => { const open = document.querySelector('.dropdown.open'); if (open && (open as HTMLElement).classList) (open as HTMLElement).classList.remove('open'); }}>Add Date</button></div>
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
                          <li>Rides start @ <a href="javascript:void(0);"><span className="price">$103</span></a></li>
                          <li className="location">Live from <a href="javascript:void(0);">New River Gorge, WV</a></li>
                        </ul>
                      </div>
                      <div className="col-md-2">
                        <button type="submit" name="submit" data-toggle="modal" data-target="#profile-select">Chat</button>
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

