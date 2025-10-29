'use client'

import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const [selectedHeadings, setSelectedHeadings] = useState<string[]>(['General Topics'])
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState<boolean>(true)
  const pathRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const updateHeadings = () => {
      const checked = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="interestcategory"]:checked'))
      const names = checked
        .map(el => el.closest('.services')?.querySelector<HTMLHeadingElement>('.desc h3')?.textContent || '')
        .filter(Boolean)
      setSelectedHeadings(names.length > 0 ? names : ['General Topics'])
      setCurrentIdx(0)
    }

    const boxes = document.querySelectorAll('input[name="interestcategory"]')
    boxes.forEach(b => b.addEventListener('change', updateHeadings))
    updateHeadings()
    return () => boxes.forEach(b => b.removeEventListener('change', updateHeadings))
  }, [])

  useEffect(() => {
    if (selectedHeadings.length <= 1) return
    let fadeTimeout: number | undefined
    let rotateInterval: number | undefined

    const scheduleNext = () => {
      setFadeIn(false)
      fadeTimeout = window.setTimeout(() => {
        setCurrentIdx(prev => (prev + 1) % selectedHeadings.length)
        setFadeIn(true)
      }, 200)
    }

    rotateInterval = window.setInterval(scheduleNext, 1800)
    return () => {
      if (fadeTimeout) window.clearTimeout(fadeTimeout)
      if (rotateInterval) window.clearInterval(rotateInterval)
    }
  }, [selectedHeadings])

  const currentText = selectedHeadings[currentIdx] || 'General Topics'

  // Fit text inside fixed width without changing line width
  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    // reset to default font-size from computed styles
    el.style.fontSize = ''
    const container = el.parentElement as HTMLElement | null
    if (!container) return
    const maxWidth = container.clientWidth - 4
    let guard = 0
    let fontSize = parseFloat(window.getComputedStyle(el).fontSize || '21')
    // Decrease font-size until it fits or reaches minimum
    while (el.scrollWidth > maxWidth && fontSize > 14 && guard < 40) {
      fontSize -= 0.5
      el.style.fontSize = fontSize + 'px'
      guard++
    }
  }, [currentText])

  return (
    <div id="zeochat-services" style={{ paddingTop: '5em' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3>
              <span className="icon-bubbles2" style={{ fontSize: '30px', color: '#fff', background: '#F1D128', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>
              I would like to connect for{' '}
              <strong className="connect-for" style={{ borderBottom: '2px solid #F1D128', display: 'inline-block', width: '282px', height: '48px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                <span id="paths" ref={pathRef} style={{ transition: 'opacity 200ms ease', opacity: fadeIn ? 1 : 0, whiteSpace: 'nowrap', display: 'inline-block' }}>{currentText}</span>
              </strong>{' '}
              <strong>Zeochats</strong>
              <strong className="select-below" style={{ fontWeight: 'normal', fontSize: '21px' }}> (select below)</strong>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 services-wrap">
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div
                  className="services spotlight admissions-advice"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null
                    if (input) {
                      input.checked = !input.checked
                      input.dispatchEvent(new Event('change', { bubbles: true }))
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Tour"
                    id="take_Tour"
                    name="interestcategory"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-computer-graphic"></i>
                  </span>
                  <div className="desc">
                    <h3>Tours</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div
                  className="services spotlight course-major-insights"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null
                    if (input) {
                      input.checked = !input.checked
                      input.dispatchEvent(new Event('change', { bubbles: true }))
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    value="Adventure"
                    id="take_Adventure"
                    name="interestcategory"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-layers"></i>
                  </span>
                  <div className="desc">
                    <h3>Adventures</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div
                  className="services spotlight campus-tours"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null
                    if (input) {
                      input.checked = !input.checked
                      input.dispatchEvent(new Event('change', { bubbles: true }))
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="take_Shopping"
                    name="interestcategory"
                    value="Shopping"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="checkmark"></span>
                  <span className="icon">
                    <i className="flaticon-smartphone"></i>
                  </span>
                  <div className="desc">
                    <h3>Shopping</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 text-center animate-box">
                <div
                  className="services spotlight student-chats"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    const input = e.currentTarget.querySelector('input[type="checkbox"]') as HTMLInputElement | null
                    if (input) {
                      input.checked = !input.checked
                      input.dispatchEvent(new Event('change', { bubbles: true }))
                    }
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="take_Concert&Festival"
                    name="interestcategory"
                    value="Concert&Festival"
                    onClick={(e) => e.stopPropagation()}
                  />
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

