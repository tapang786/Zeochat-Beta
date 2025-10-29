'use client'

import { useState, useEffect } from 'react'

interface IntroProfileSelectModalProps {
  isOpen: boolean
  onClose: () => void
  onProfileSelect: (profile: 'guide' | 'explorer') => void
}

export default function IntroProfileSelectModal({ 
  isOpen, 
  onClose, 
  onProfileSelect 
}: IntroProfileSelectModalProps) {
  const [selectedProfile, setSelectedProfile] = useState<'guide' | 'explorer' | null>(null)

  useEffect(() => {
    console.log('Modal isOpen:', isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      console.log('Modal should be visible now')
      
      // Debug: Check if modal element exists and is visible
      setTimeout(() => {
        const modalElement = document.getElementById('intro-select')
        if (modalElement) {
          console.log('Modal element found:', modalElement)
          console.log('Modal display style:', window.getComputedStyle(modalElement).display)
          console.log('Modal visibility:', window.getComputedStyle(modalElement).visibility)
          console.log('Modal z-index:', window.getComputedStyle(modalElement).zIndex)
        } else {
          console.log('Modal element NOT found!')
        }
      }, 100)
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleProfileChange = (profile: 'guide' | 'explorer') => {
    // Toggle behavior - clicking selected option deselects it
    if (selectedProfile === profile) {
      setSelectedProfile(null)
    } else {
      setSelectedProfile(profile)
    }
  }

  const handleLetsGo = () => {
    if (selectedProfile) {
      onProfileSelect(selectedProfile)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      id="intro-select"
      style={{ 
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99999
      }}
      onClick={onClose}
    >
      <div style={{
        backgroundColor: 'white',
        margin: '50px auto',
        maxWidth: '600px',
        borderRadius: '0px 0px 8px 8px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        {/* Dark Header */}
        <div style={{ 
          backgroundColor: '#302a40', 
          backgroundImage: 'url(/images/dark.jpg)',
          backgroundPosition: 'center',
          padding: '30px 20px', 
          position: 'relative'
        }}>
          <button 
            type="button" 
            onClick={onClose}
            style={{ 
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'none', 
              border: 'none', 
              fontSize: '36px', 
              cursor: 'pointer',
              color: '#fff',
              opacity: 0.3
            }}
          >
            ×
          </button>
          
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              margin: '0 0 12px 0', 
              fontSize: '24px', 
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px #000'
            }}>
              Welcome to Zeochat <span style={{ color: '#F1D128' }}>●</span>
            </h2>
            <h3 style={{ 
              margin: '0', 
              fontSize: '21px', 
              color: '#fff',
              textShadow: '1px 1px 3px #000'
            }}>
              We connect students to learn, earn and do more
            </h3>
          </div>
        </div>

        {/* White Body */}
        <div style={{ padding: '30px 20px', backgroundColor: 'white' }}>
          <h3 style={{ 
            fontSize: '18px', 
            marginBottom: '25px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            Select your profile
          </h3>

          {/* Guide Option */}
          <div style={{ 
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px'
          }}>
            <div style={{ 
              width: '25px',
              height: '25px',
              border: '2px solid #eee',
              borderRadius: '0',
              marginTop: '2px',
              backgroundColor: selectedProfile === 'guide' ? '#F1D128' : '#eee',
              position: 'relative',
              cursor: 'pointer'
            }} onClick={(e) => {
              e.stopPropagation();
              handleProfileChange('guide');
            }}>
              {selectedProfile === 'guide' && (
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '9px',
                  width: '7px',
                  height: '14px',
                  border: 'solid white',
                  borderWidth: '0 3px 3px 0',
                  transform: 'rotate(45deg)'
                }}></div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                marginBottom: '8px', 
                fontWeight: 'bold', 
                fontSize: '21px',
                color: '#333'
              }}>
                Guide
              </div>
              <div style={{ 
                fontSize: '15px', 
                color: '#666',
                lineHeight: '1.5',
                fontWeight: 'normal'
              }}>
                Are you an enrolled college student, graduate or professor? Perfect! <br />
                <strong style={{ color: '#333' }}>Make money at a rate that you determine</strong> by sharing your campus knowledge and experiences with prospective students.
              </div>
            </div>
          </div>

          {/* Explorer Option */}
          <div style={{ 
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px'
          }}>
            <div style={{ 
              width: '25px',
              height: '25px',
              border: '2px solid #eee',
              borderRadius: '0',
              marginTop: '2px',
              backgroundColor: selectedProfile === 'explorer' ? '#F1D128' : '#eee',
              position: 'relative',
              cursor: 'pointer'
            }} onClick={(e) => {
              e.stopPropagation();
              handleProfileChange('explorer');
            }}>
              {selectedProfile === 'explorer' && (
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '9px',
                  width: '7px',
                  height: '14px',
                  border: 'solid white',
                  borderWidth: '0 3px 3px 0',
                  transform: 'rotate(45deg)'
                }}></div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                marginBottom: '8px', 
                fontWeight: 'bold', 
                fontSize: '21px',
                color: '#333'
              }}>
                Explorer
              </div>
              <div style={{ 
                fontSize: '15px', 
                color: '#666',
                lineHeight: '1.5',
                fontWeight: 'normal'
              }}>
                Are you exploring colleges & universities? Awesome! <br />
                Learn more than ever about the campuses of your choice by connecting <strong style={{ color: '#333' }}>live</strong> with enrolled students, graduates or professors, plus create helpful campus connections.
              </div>
            </div>
          </div>

          {/* Let's Go Button */}
          <div style={{ textAlign: 'right', marginTop: '20px', marginBottom: '80px' }}>
            <button 
              disabled={!selectedProfile}
              onClick={handleLetsGo}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: selectedProfile ? '#F1D128' : '#f6e173',
                color: 'white',
                border: '1px solid #999',
                borderRadius: '100px',
                cursor: selectedProfile ? 'pointer' : 'not-allowed',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px #000',
                opacity: selectedProfile ? 1 : 0.5,
                width: '30%',
                float: 'right'
              }}
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
