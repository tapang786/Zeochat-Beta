'use client'

import { useEffect } from 'react'

export default function SearchNow() {
  useEffect(() => {
    // Wait for scripts to load, then initialize datepicker
    const initDatepicker = () => {
      const w: any = window
      const $ = w.jQuery || w.$
      
      if ($ && $.fn && $.fn.datepicker) {
        try {
          // Initialize datepicker on the datepicker div
          $('.datepick-select .datepicker').datepicker({
            minDate: new Date(),
            onSelect: function(dateText: string) {
              // Find the input field and update it
              const inputField = $(this).closest('.dropdown').find('input[type="text"]')
              inputField.val(dateText).css('border', '2px solid #0081ff')
              
              // Close the dropdown
              const open = document.querySelector('.dropdown.open')
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

  // Rotate the role text: "Text", "Voice", "Video" with a simple typing animation
  useEffect(() => {
    const words = [' Text...', 'Voice', 'Video']
    const roleEl = document.getElementById('role')
    if (!roleEl) return

    let wordIdx = 0
    let charIdx = 0
    let deleting = false
    let tickTimer: number | undefined

    const tick = () => {
      const current = words[wordIdx]
      if (!deleting) {
        charIdx++
        roleEl.textContent = current.slice(0, charIdx)
        if (charIdx === current.length) {
          deleting = true
          tickTimer = window.setTimeout(tick, 900) // pause when fully typed
          return
        }
      } else {
        charIdx--
        roleEl.textContent = current.slice(0, charIdx)
        if (charIdx === 0) {
          deleting = false
          wordIdx = (wordIdx + 1) % words.length
        }
      }
      tickTimer = window.setTimeout(tick, deleting ? 60 : 90)
    }

    tickTimer = window.setTimeout(tick, 400)

    return () => {
      if (tickTimer) window.clearTimeout(tickTimer)
    }
  }, [])

  return (
    <div id="search-now" className="zeochat-search">
      <div className="container">
        <div className="row">
          <div className="col-md-12 search-wrap">
            <div className="search-wrap-2">
              <form action="javascript:void(0);" method="post" className="zeochat-form" autoComplete="off">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      {/* <label htmlFor="search">Search Course</label> */}
                      <div className="form-field">
                        <i className="icon icon-library" data-toggle="modal" data-target="#campus-select"></i>
                        <input type="text" defaultValue="Experience Select" name="campus" className="form-control" data-toggle="modal" data-target="#campus-select"/>
                        {/* TEST: Text input with autocomplete (dropdown) as user inputs name of campus + button for "Browse" that triggers modal. */}
                        {/* <input type="text" id="search" className="form-control" placeholder="Search"/> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      {/* <label htmlFor="course">Category Course</label> */}
                      <div className="form-field">
                        <i className="icon icon-clock"></i>
                        <div className="dropdown topic-select">
                          <input name="chat-select" id="experience-select2" className="form-control dropdown-toggle" defaultValue="Zeochat Select" data-toggle="dropdown" readOnly />
                          <ul className="dropdown-menu checkbox" style={{ width: '100%', padding: '12px', paddingTop: '9px' }}>
                            <li className="dropdown-header">I'd to Zeochat for {/*<a className="infolink disableDefault" title="Learn More" data-toggle="modal" data-target="#chat-topics">?</a>*/}</li>
                            <li className="divider"></li>
                            <li>
                              <label>
                                <input className="radio checkbox-item item-two" name="time" type="radio" value="15 Minutes" defaultChecked />15 Minutes
                              </label>
                            </li>
                            <li>
                              <label>
                                <input className="checkbox checkbox-item item-three" name="time" type="radio" value="30 Minutes"/>30 Minutes
                              </label>
                            </li>
                            <li>
                              <label>
                                <input className="checkbox checkbox-item item-four" name="time" type="radio" value="45 Minutes"/>45 Minutes
                              </label>
                            </li>
                            <li>
                              <label>
                                <input className="checkbox checkbox-item item-five" name="time" type="radio" value="60 Minutes"/>60 Minutes
                              </label>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="add-topics btn btn-sm button-success"
                                onClick={() => {
                                  const open = document.querySelector('.dropdown.open')
                                  if (open && open.classList) open.classList.remove('open')
                                }}
                              >
                                Add
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-type">
                        <label style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#live-chat-learn">
                          Chat via
                          <span style={{ marginLeft: 0 }}>
                            Live
                            <span style={{ borderBottom: '2px solid #F1D128' }}>
                              <span id="role" style={{ display: 'inline-block', width: 45 }}></span>
                            </span>
                          </span>
                        </label>
                        {/*<a className="infolink" title="Learn More" data-toggle="modal" data-target="#live-chat-learn">?</a>*/}
                        <a className="icon-pencil2" title="Learn More" data-toggle="modal" data-target="#live-chat-learn"></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <div className="form-field dropdown">
                        <i className="icon icon-calendar"></i>
                        <div className="dropdown datepick-select">
                          <input
                            id="dropdownMenuButton"
                            type="text"
                            name="date"
                            defaultValue="Date Select"
                            className="form-control dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            readOnly
                          />
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={(e) => e.stopPropagation()}>
                            <div className="datepicker">
                              <button type="button" className="add-date btn btn-sm btn-success" onClick={() => {
                                const open = document.querySelector('.dropdown.open')
                                if (open && open.classList) open.classList.remove('open')
                              }}>Add Date</button>
                            </div>
                          </div>
                        </div>
                        {/* <label htmlFor="difficulty">Difficulty</label> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <input type="button" data-toggle="modal" data-target="#profile-select" name="submit" id="submit" value="Chat" className="btn btn-primary btn-block"/>
                    <input type="hidden" name="unvalidated" className="unvalidated" value="unvalidated campus"/>
                    {/* link to networks and schedules */}
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


