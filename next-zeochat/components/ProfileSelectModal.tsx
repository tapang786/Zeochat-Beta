'use client'

import { useState, useEffect, useRef } from 'react'

export default function ProfileSelectModal() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false)
  const [duration, setDuration] = useState('15 Minutes')
  const [profileType, setProfileType] = useState('Guide')
  const [campusType, setCampusType] = useState('')
  const [rateDuration, setRateDuration] = useState('Hour')
  
  const guideRadioRef = useRef<HTMLInputElement>(null)
  const explorerRadioRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Handle outside clicks to close dropdowns
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown')) {
        setIsDropdownOpen(false)
        setIsTimeDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div id="profile-select" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true" style={{ display: 'none' }}>
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row animate-box">
              <div className="col-md-12 zeochat-heading center-heading text-center" style={{ marginBottom: '0px', zIndex: -1 }}>
                <h2>
                  Welcome to Zeochat <span className="icon-feed"></span>
                </h2>
                <h3 id="modal-subtitle">Connect with Guides To Explore the world</h3>
              </div>
            </div>
          </div>

          <form id="waitlist-form" name="modal-form" action="#" method="post" noValidate autoComplete="off">
            <div className="modal-body phase-one">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12" id="errorregister"></div>
                  <div className="col-md-12 animate-box">
                    <label 
                      id="firstguide" 
                      className="container"
                      style={{ cursor: 'pointer' }}
                    >
                      Guide <br /> <span>I am here to provide an experience</span>
                      <input 
                        ref={guideRadioRef}
                        type="radio" 
                        name="registertype2" 
                        className="checkbox ambassador" 
                        value="Guide" 
                        checked={profileType === 'Guide'}
                        onClick={(e) => {
                          if (!e.currentTarget.checked) {
                            setProfileType('Guide')
                            e.currentTarget.checked = true
                          }
                        }}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProfileType('Guide')
                            const profileTypeInput = document.getElementById('profiletype') as HTMLInputElement
                            if (profileTypeInput) profileTypeInput.value = 'Guide'
                            setTimeout(() => {
                              const $ = (window as any).$
                              if ($) {
                                $(e.target).trigger('change')
                              }
                            }, 10)
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label 
                      id="firstexplore" 
                      className="container"
                      style={{ cursor: 'pointer' }}
                    >
                      Explorer<br />
                      <span id="dynamic-explorer-label-text">I am exploring places and experiences</span>
                      <input 
                        ref={explorerRadioRef}
                        type="radio" 
                        name="registertype2" 
                        className="checkbox explorer" 
                        value="Explorer" 
                        checked={profileType === 'Explorer'}
                        onClick={(e) => {
                          if (!e.currentTarget.checked) {
                            setProfileType('Explorer')
                            e.currentTarget.checked = true
                          }
                        }}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProfileType('Explorer')
                            const profileTypeInput = document.getElementById('profiletype') as HTMLInputElement
                            if (profileTypeInput) profileTypeInput.value = 'Explorer'
                            setTimeout(() => {
                              const $ = (window as any).$
                              if ($) {
                                $(e.target).trigger('change')
                              }
                            }, 10)
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <div className="row mt-2 explorer-fields" >
                      <div className="col-md-6">
                        <label htmlFor="explore_location">Location Request</label>
                        <input
                          type="text"
                          id="explore_location"
                          className="explorer-campus-input"
                          placeholder="Where would you like to explore?"
                          style={{ fontSize: '12px' }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="explore_experience">Experience Request</label>
                        <input
                          type="text"
                          id="explore_experience"
                          className="explorer-campus-input"
                          placeholder="What would you like to achieve?"
                          style={{ fontSize: '12px' }}
                        />
                      </div>
                    </div>

                    <div className="campus-tell animate-box row" style={{ marginTop: '12px' }}>
                      <div id="explorer-campus-input" className="forguideonly col-md-12" style={{ marginBottom: '18px', display: 'none' }}>
                        <label id="exploreinterest">What are your interests? </label>
                        <input
                          type="text"
                          name="explorer-campus-input"
                          className="explorer-campus-input"
                          id="explorer-campus-input2"
                          placeholder="Enter here"
                        />
                      </div>

                      <div id="explorer-rate-input" className="forexploreronly col-md-12" style={{ marginBottom: '18px' }}>
                        <label id="explorerate" htmlFor="explorer-rate-input2">
                          What price do you offer for your request?
                        </label>
                        <input
                          type="text"
                          name="explorer_rate"
                          className="explorer-rate-input"
                          id="explorer-rate-input2"
                          placeholder="Enter your price"
                          defaultValue="$5"
                        />
                      </div>

                      <input type="hidden" name="profiletype" id="profiletype" value="Guide" />
                    </div>

                    <div id="stream-whenexperience-input" style={{ marginBottom: '18px' }} className="row">
                      <div className="col-md-6">
                        <label htmlFor="whenexperience" className="when-experience-label">
                          When would you like to stream?{' '}
                        </label>
                        <div className="form-field dropdown" style={{ position: 'relative' }}>
                          <i
                            className="icon icon-calendar"
                            style={{
                              position: 'absolute',
                              left: '0px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: '#666',
                              zIndex: 2
                            }}
                          ></i>
                          <div className={`dropdown datepick-select ${isDropdownOpen ? 'open' : ''}`} style={{ position: 'relative' }}>
                            <input
                              type="text"
                              name="whenexperience"
                              className="explorer-experience-input"
                              id="whenexperience"
                              aria-haspopup="true"
                              aria-expanded="false"
                              readOnly
                              style={{ paddingLeft: '35px', height: '36px', width: '100%' }}
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            />
                            {isDropdownOpen && (
                              <div className="dropdown-menu" aria-labelledby="whenexperience" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}>
                                <div className="datepicker">
                                  <button
                                    type="button"
                                    className="add-date btn btn-sm btn-success"
                                    onClick={() => setIsDropdownOpen(false)}
                                  >
                                    Add Date
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div id="stream-experience-input" style={{ marginBottom: '18px'}} className="forGuideSelect">
                        <div className="col-md-6">
                          <label htmlFor="streamexperience">What would you like to stream? </label>
                          <input
                            type="text"
                            name="streamexperience"
                            className="explorer-campus-input"
                            id="streamexperience"
                            placeholder="Enter your experience"
                          />
                        </div>
                      </div>

                      <div className="col-md-6" id="forExplorerSelect" style={{ display: 'none' }}>
                        <label htmlFor="whenexperiencetime" className="when-experience-label">
                          How long would you like to stream?{' '}
                        </label>
                        <div className="form-field">
                          <i className="icon icon-clock" id="whenexperiencetime-icon"></i>
                          <div className={`dropdown topic-select ${isTimeDropdownOpen ? 'open' : ''}`} id="whenexperiencetime-dropdown">
                            <input
                              name="whenexperiencetime"
                              id="whenexperiencetime"
                              className="form-control dropdown-toggle"
                              value={duration}
                              style={{
                                background: 'unset',
                                borderTop: '0px',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderBottom: '1px',
                                height: '26px'
                              }}
                              readOnly
                              onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                            />
                            {isTimeDropdownOpen && (
                              <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                              <li className="dropdown-header">I'd to Zeochat for</li>
                              <li className="divider"></li>
                              <li>
                                <label>
                                  <input
                                    className="radio checkbox-item item-two"
                                    name="whenexperiencetime"
                                    type="radio"
                                    value="15 Minutes"
                                    checked={duration === '15 Minutes'}
                                    onChange={(e) => setDuration(e.target.value)}
                                  />
                                  15 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-three" name="whenexperiencetime" type="radio" value="30 Minutes" checked={duration === '30 Minutes'} onChange={(e) => setDuration(e.target.value)} />
                                  30 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-four" name="whenexperiencetime" type="radio" value="45 Minutes" checked={duration === '45 Minutes'} onChange={(e) => setDuration(e.target.value)} />
                                  45 Minutes
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input className="checkbox checkbox-item item-five" name="whenexperiencetime" type="radio" value="60 Minutes" checked={duration === '60 Minutes'} onChange={(e) => setDuration(e.target.value)} />
                                  60 Minutes
                                </label>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="add-topics btn btn-sm button-success"
                                  onClick={() => setIsTimeDropdownOpen(false)}
                                >
                                  Add
                                </button>
                              </li>
                            </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="email-intro row animate-box">
                    <div className="col-md-6">
                      <input type="text" name="name" id="fullname" className="fullname" placeholder="Your Name" style={{ width: '95%', padding: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid #a9a9a9', marginLeft: '15px' }} />
                    </div>
                    <div className="col-md-6">
                      <input type="checkbox" name="phone" value="1" autoComplete="off" className="checkbox phone" />
                      <input
                        type="email"
                        name="email"
                        className="email email-primary explorer-email form-control"
                        onKeyUp={(e) => {
                          const target = e.target as HTMLInputElement
                          const guideEmail = document.getElementById('guide-email') as HTMLInputElement
                          if (guideEmail) guideEmail.value = target.value
                        }}
                        id="explorer-email"
                        placeholder="Your email address"
                        style={{ width: '95%', padding: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid #a9a9a9', marginRight: '15px' }}
                      />
                      <input type="hidden" name="email" className="email email-primary guide-email form-control" id="guide-email" placeholder="Your email address" />

                      <p style={{ color: '#008000', marginBottom: '0px', fontSize: '15px', textAlign: 'right', fontWeight: '600' }}>
                        We won't spam you
                      </p>
                      <span className="error-email">Your email address is required</span>
                    </div>

                    <div id="rate-container" style={{ display: 'none' }} className="row forGuideSelect">
                      <div className="col-md-6" style={{ padding: '0rem 0rem 0rem 3rem' }}>
                        <label htmlFor="rate" style={{ marginBottom: '0px' }}>
                          Enter your rate
                        </label>
                        <input
                          type="text"
                          name="rate"
                          id="rate"
                          className="form-control"
                          placeholder="Enter your rate"
                          style={{
                            paddingLeft: '2px',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: '1px solid #a9a9a9'
                          }}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="rate_duration" style={{ marginBottom: '0px' }}>
                          Per
                        </label>
                        <select
                          name="rate_duration"
                          id="rate_duration"
                          className="form-control"
                          style={{
                            paddingLeft: '2px',
                            height: '50px',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: '1px solid #a9a9a9'
                          }}
                        >
                          <option value="45 Minutes">15 mins</option>
                          <option value="30 Minutes">30 minutes</option>
                          <option value="45 Minutes">45 minutes</option>
                          <option value="60 Minutes">60 minutes</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12" style={{ marginTop: '15px', marginBottom: '15px', transform: 'scale(0.9)', transformOrigin: '0 0' }}>
                      <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
                    </div>
                  </div>

                  <div className="modal-footer animate-box" style={{ padding: '0px' }}>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="text" name="website" className="input-website" placeholder="Enter Your Website" />
                      
                        <button
                          name="submit"
                          type="submit"
                          id="registerBtnfinal"
                          className="explorer-view btn btn-primary brand-color"
                          style={{ width: '100%', border: '1px solid #999', padding: '15px', fontSize: '21px', margin: '0px' }}
                        >
                          Request Your Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div id="form-success-message" style={{ display: 'none', textAlign: 'center', padding: '50px' }}>
            <h3>Thank you!</h3>
            <p>We've received your request and will be in contact soon.</p>
            <button id="close-success-modal" className="btn btn-primary brand-color" style={{ marginTop: '20px' }}>
              Close
            </button>
          </div>

          <div id="campus-type" className="fancy-collapse-panel" style={{ display: 'none' }}>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="campus-type-container">
                  <div className="row">
                    <form>
                      <div className="col-md-12">
                        <h2>
                          Select my campus type for a <strong>rate recommendation</strong>
                        </h2>
                      </div>
                      <div className="col-md-4">
                        <label className="radio_container" style={{ padding: '0', margin: '0' }}>
                          <img src="images/campuses/bard.jpg" style={{ display: 'block', width: '100%', height: '240px', objectFit: 'cover', marginBottom: '9px' }} />
                          <span style={{ marginLeft: '30px' }}>Private</span>
                          <input 
                            className="radio" 
                            type="radio" 
                            name="radio" 
                            value="Private" 
                            checked={campusType === 'Private'}
                            onChange={(e) => setCampusType(e.target.value)}
                          />
                          <span className="radio_button" style={{ top: 'auto', bottom: '0px' }}></span>
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="radio_container" style={{ padding: '0', margin: '0' }}>
                          <img src="images/campuses/berkeley.jpg" style={{ display: 'block', width: '100%', height: '240px', objectFit: 'cover', marginBottom: '9px' }} />
                          <span style={{ marginLeft: '30px' }}>Public</span>
                          <input 
                            className="radio" 
                            type="radio" 
                            name="radio" 
                            value="Public" 
                            checked={campusType === 'Public'}
                            onChange={(e) => setCampusType(e.target.value)}
                          />
                          <span className="radio_button" style={{ top: 'auto', bottom: '0px' }}></span>
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="radio_container" style={{ padding: '0', margin: '0' }}>
                          <img src="images/campuses/harvard.png" style={{ display: 'block', width: '100%', height: '240px', objectFit: 'cover', marginBottom: '9px' }} />
                          <span style={{ marginLeft: '30px' }}>Elite</span>
                          <input 
                            className="radio" 
                            type="radio" 
                            name="radio" 
                            value="Elite" 
                            checked={campusType === 'Elite'}
                            onChange={(e) => setCampusType(e.target.value)}
                          />
                          <span className="radio_button" style={{ top: 'auto', bottom: '0px' }}></span>
                        </label>
                      </div>
                      <select className="campus-type form-select" style={{ display: 'none' }}>
                        <option value="">Select Your Campus Type</option>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                        <option value="Elite">Elite</option>
                      </select>
                    </form>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="rate" style={{ float: 'left', lineHeight: '39px', marginTop: '12px', marginBottom: '9px', width: '100%', fontWeight: 'normal' }}>
                        My <strong className="chat-time-rate">hourly</strong> rate on Zeochat is
                        <span className="input-dollar dollar2">
                          &#36;
                          <input name="Hourly_Rate" className="hourly-rate dollars" type="number" placeholder="50" min="15" step="5" max="150" defaultValue="50" />
                          <input name="HH_Rate" className="half-hourly-rate dollars" type="number" placeholder="25" min="10" step="5" max="75" defaultValue="25" style={{ display: 'none' }} />
                          <input name="QH_Rate" className="quarter-hourly-rate dollars" type="number" placeholder="12" min="0" step="5" max="36" defaultValue="12" style={{ display: 'none' }} />
                        </span>
                        <span className="modify-rate">Modify</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <form>
                      <div className="col-md-12">
                        <div className="rate duration-container dur2" style={{ display: 'block', marginBottom: '6px' }}>
                          <label className="radio_container">
                            Hour
                            <input 
                              className="radio" 
                              type="radio" 
                              name="Hour2" 
                              value="Hour" 
                              checked={rateDuration === 'Hour'}
                              onChange={(e) => setRateDuration(e.target.value)}
                            />
                            <span className="radio_button"></span>
                          </label>
                          <label className="radio_container">
                            Half Hour
                            <input 
                              className="radio" 
                              type="radio" 
                              name="HH2" 
                              value="HH" 
                              checked={rateDuration === 'HH'}
                              onChange={(e) => setRateDuration(e.target.value)}
                            />
                            <span className="radio_button"></span>
                          </label>
                          <label className="radio_container">
                            Quarter Hour
                            <input 
                              className="radio" 
                              type="radio" 
                              name="QH2" 
                              value="QH" 
                              checked={rateDuration === 'QH'}
                              onChange={(e) => setRateDuration(e.target.value)}
                            />
                            <span className="radio_button"></span>
                          </label>
                          <select className="duration form-select" style={{ display: 'none' }}>
                            <option value="">Select Your Rate Duration</option>
                            <option value="Hour">Hourly</option>
                            <option value="HH">Half Hour</option>
                            <option value="QH">Quarter Hour</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="modal-footer" style={{ borderTop: 'none' }}>
                <input name="submit" type="submit" className="btn btn-secondary" style={{ float: 'left' }} value="Back" />
                <input name="submit" type="submit" className="btn btn-secondary brand-color" value="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

