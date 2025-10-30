'use client'

import { useEffect } from 'react'

type SlideData = {
  videoSource: string
  title: string
  subtitle: string
  buttonText: string
  buttonIcon: string
  modalTarget: string
  paddingLeft?: string
}

const slides: SlideData[] = [
  {
    videoSource: 'videos/water.mp4',
    title: 'Make Money with Your Phone',
    subtitle: 'Stream Local Experiences LIVE and Get Paid',
    buttonText: 'Go Live',
    buttonIcon: 'icon-shield2',
    modalTarget: '#campus-select',

  },
  {
    videoSource: 'videos/fireworks.mp4',
    title: 'Monetize YOUR World',
    subtitle: 'Stream Local Experiences LIVE and Get Paid',
    buttonText: 'Qualify as a Guide',
    buttonIcon: 'icon-global',
    modalTarget: '#campus-select',

  },
  {
    videoSource: 'videos/motorcycle.mp4',
    title: 'Bring Your Wonders to Life',
    subtitle: 'Every Zeochat connects you with real people for real experiences',
    buttonText: 'Start Your Journey',
    buttonIcon: 'icon-library',
    modalTarget: '#chat-topics',

  },
  {
    videoSource: 'videos/surf.mp4',
    title: 'Explore Anywhere. Connect Instantly',
    subtitle: 'Save travel time + money by exploring places instantly with authentic local Guides',
    buttonText: 'Start Connecting',
    buttonIcon: 'icon-bubble',
    modalTarget: '#live-chat-learn',

  },
  {
    videoSource: 'videos/drone.mp4',
    title: 'Request An Experience or Browse Listings',
    subtitle: "Experiences are 100% unique at your request, or join something fun that's coming up",
    buttonText: "Let's Go",
    buttonIcon: 'icon-rocket',
    modalTarget: '#profile-select',

  },
  {
    videoSource: 'videos/buggy.mp4',
    title: 'Go Beyond Your Social Network',
    subtitle: 'Discover a whole new world of places, people and experiences',
    buttonText: 'Schedule Your Zeochat',
    buttonIcon: 'icon-calendar2',
    modalTarget: '#modal-date-select',
   
  },
  {
    videoSource: 'videos/sealions.mp4',
    title: 'Start a Zeochat Today',
    subtitle: 'Connect directly with real people to do real things... anywhere',
    buttonText: 'Get Started',
    buttonIcon: 'icon-feed intro-feed-icon',
    modalTarget: '#profile-select',
    
  }
]

export default function Hero() {
  useEffect(() => {
    // Initialize flexslider after component mounts
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$
      
      // Initialize flexslider
      $('#zeochat-hero .flexslider').flexslider({
        animation: 'fade',
        slideshowSpeed: 7500,
        directionNav: true,
        start: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
          }, 500)
        },
        before: function () {
          setTimeout(function () {
            $('.slider-text').removeClass('animated fadeInUp')
            $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
          }, 500)
        }
      })

      // Handle modal open on "Start Exploring" button click
      const handleCampusSelectClick = function(e: JQuery.Event) {
        e.preventDefault()
        const modal = $('#campus-select')
        if (modal.length) {
          modal.modal('show')
        }
      }
      
      const handleChatTopicsClick = function(e: JQuery.Event) {
        e.preventDefault()
        const modal = $('#chat-topics')
        if (modal.length) {
          modal.modal('show')
        }
      }

      const handleIntroSelectClick = function(e: JQuery.Event) {
        e.preventDefault()
        const modal = $('#intro-select')
        if (modal.length) {
          modal.modal('show')
        }
      }

      $(document).on('click', '[data-target="#campus-select"]', handleCampusSelectClick)
      $(document).on('click', '[data-target="#chat-topics"]', handleChatTopicsClick)
      $(document).on('click', '[data-target="#intro-select"]', handleIntroSelectClick)
      
      return () => {
        $(document).off('click', '[data-target="#campus-select"]', handleCampusSelectClick)
        $(document).off('click', '[data-target="#chat-topics"]', handleChatTopicsClick)
        $(document).off('click', '[data-target="#intro-select"]', handleIntroSelectClick)
      }
    }
  }, [])

  return (
    <aside id="zeochat-hero">
      <div className="flexslider">
        <ul className="slides">
          {slides.map((slide, index) => (
            <li key={index}>
            <div
              className="fl-bg-video"
              data-video-mobile="yes"
              data-width="1280"
              data-height="720"
              data-fallback={slide.videoSource}
              data-mp4={slide.videoSource}
              data-mp4-type="video/mp4"
              data-webm-type="video/webm"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style={{
                  backgroundImage: 'url()',
                  backgroundColor: 'transparent',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  position: 'absolute',
                  height: '1280px'
                }}
              >
                <source src={slide.videoSource} type="video/mp4" />
              </video>
            </div>
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div 
                  className="col-md-8 col-sm-12 col-xs-12 slider-text" 
                  style={{
                    textAlign: 'left'
                  }}
                >
                  <div className="slider-text-inner" style={{ textAlign: 'left' }}>
                    <div className="desc ambassador-view">
                      <h2>{slide.title}</h2>
                      <h3>{slide.subtitle}</h3>
                      <p className="amb-qualify">
                        <a
                          href="#"
                          onClick={(e)=>e.preventDefault()}
                          className="btn btn-primary btn-lg popup-vimeo"
                          data-toggle="modal"
                          data-target={slide.modalTarget}
                        >
                          <span className="icon">
                            <i className={slide.buttonIcon}></i>
                          </span>
                          {slide.buttonText}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
