'use client'

import { useEffect } from 'react'

type ExperienceData = {
  title: string
  image: string
  imageAlt: string
  price: string
  priceLabel: string
  location: string
  formFieldClass?: string
  dropdownId: string
}

const experiences: ExperienceData[] = [
  {
    title: 'Tour of Rome',
    image: 'images/intro/trevi.jpg',
    imageAlt: 'Rome',
    price: '$141',
    priceLabel: 'Tours start @',
    location: 'Rome, Italy',
    dropdownId: 'dropdownMenuButton1'
  },
  {
    title: 'Shopping in NYC',
    image: 'images/intro/nyc.jpg',
    imageAlt: 'Shopping in NYC',
    price: '$111',
    priceLabel: 'Shopping starts @',
    location: 'New York City, New York',
    dropdownId: 'dropdownMenuButton2'
  },
  {
    title: 'Grand Canyon Drone Tour',
    image: 'images/intro/grand_canyon.jpg',
    imageAlt: 'Grand Canyon Drone Tour',
    price: '$120',
    priceLabel: 'Tours start @',
    location: 'Grand Canyon National Park, AZ',
    formFieldClass: 'topic-select',
    dropdownId: 'dropdownMenuButton3'
  },
  {
    title: 'Tour of Bali',
    image: 'images/intro/bali.jpg',
    imageAlt: 'Tour of Bali',
    price: '$118',
    priceLabel: 'Tours start @',
    location: 'Bali, Indonesia',
    dropdownId: 'dropdownMenuButton4'
  },
  {
    title: 'Lamborghini Ride in Vegas',
    image: 'images/intro/lambo.jpg',
    imageAlt: 'Lamborghini Ride in Vegas',
    price: '$147',
    priceLabel: 'Rides start @',
    location: 'Las Vegas, NV',
    dropdownId: 'dropdownMenuButton5'
  },
  {
    title: 'Wave Watching & Surf Chat',
    image: 'images/intro/surf.jpg',
    imageAlt: 'Wave Watching & Surf Chat',
    price: '$22',
    priceLabel: 'Surf chat starts @',
    location: 'Santa Cruz, CA',
    dropdownId: 'dropdownMenuButton6'
  },
  {
    title: 'Falcon Flight Cam',
    image: 'images/intro/falcon.jpg',
    imageAlt: 'Falcon Flight Cam',
    price: '$97',
    priceLabel: 'Flights start @',
    location: 'Marysville, CA',
    dropdownId: 'dropdownMenuButton7'
  },
  {
    title: 'Scuba Adventure',
    image: 'images/intro/diving.jpg',
    imageAlt: 'Scuba Diving Adventure',
    price: '$132',
    priceLabel: 'Dives start @',
    location: 'French Polynesia',
    dropdownId: 'dropdownMenuButton13'
  },
  {
    title: 'White Water Kayaking',
    image: 'images/intro/kayaking.jpg',
    imageAlt: 'White Water Kayaking',
    price: '$103',
    priceLabel: 'Rides start @',
    location: 'New River Gorge, WV',
    dropdownId: 'dropdownMenuButton15'
  }
]

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
          {experiences.map((experience, index) => (
            <div key={index} className="col-md-4 animate-box" data-value={experience.title}>
            <div className="classes campuses">
              <form action="#" onSubmit={(e)=>e.preventDefault()} method="post" className="zeochat-form">
                  <input type="hidden" name="campus" value={experience.title} />
                  <img className="classes-img" src={experience.image} alt={experience.imageAlt} />
                <div className="wrap">
                  <div className="desc" style={{ paddingBottom: '30px' }}>
                    <h2 className="campus">
                        <a href="#" onClick={(e)=>e.preventDefault()}>{experience.title}</a>
                    </h2>

                    <div className="row">
                      <div className="col-md-12 no-pad">
                          <div className={`form-container form-group topic-select ${experience.formFieldClass || ''}`}>
                            <div className={`form-field ${experience.formFieldClass || ''}`}>
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
                                  id={experience.dropdownId}
                                type="text"
                                name="date"
                                defaultValue="Date Select"
                                className="form-control dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                readOnly
                              />
                                <div className="dropdown-menu" aria-labelledby={experience.dropdownId} onClick={(e) => e.stopPropagation()}>
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
                            {experience.priceLabel}{' '}
                            <a href="#" onClick={(e)=>e.preventDefault()}>
                                <span className="price">{experience.price}</span>
                            </a>
                          </li>
                          <li className="location">
                              Live from <a href="#" onClick={(e)=>e.preventDefault()}>{experience.location}</a>
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
          ))}
        </div>
      </div>
    </div>
  )
}

