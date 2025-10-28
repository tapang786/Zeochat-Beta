'use client'

export default function UserTypeSelect() {
  return (
    <div id="user-type-select">
      <div className="container">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3 style={{ marginTop: '111px', lineHeight: '75px' }}>
              <strong style={{ fontSize: '39px' }}>Hey! Welcome to Zeochat</strong>
            </h3>

            <h3 className="ambassador-view" style={{ marginTop: '12px', lineHeight: '60px' }}>
              Make Money by Sharing Your World
            </h3>

            <h3 style={{ lineHeight: '75px', marginTop: '12px', marginBottom: '111px' }}>
              We're invite-only. Apply for your{' '}
              <a href="javascript:void(0);" data-toggle="modal" data-target="#profile-select">
                <strong id="typed" style={{ color: '#F1D128', textShadow: '1px 1px 0px #000', textDecoration: 'underline' }}>
                  EXCLUSIVE BETA
                </strong>
              </a>{' '}
              access invitation
            </h3>

            <h3 className="i-am">
              <span className="icon-user-plus" style={{ fontSize: '39px', color: '#fff', background: '#F1D128', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>{' '}
              <strong style={{ fontWeight: '600' }}>I'd like to be a Guide</strong>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 zeochat-heading animate-box">
            <div className="engagement-box explorer-box" style={{ background: 'url(images/explorers/compass.jpg)', backgroundSize: 'cover', float: 'right', marginRight: '12px' }}>
              <div className="e-box-content">
                <h3 className="center-heading text-center" style={{ color: '#fff' }}>
                  Explorer
                  <span style={{ fontSize: '18px' }}> / Learner</span>
                  <input type="radio" name="registertype" className="checkbox explorer" value="explorer" />
                  <span className="checkmark"></span>
                </h3>
                <span className="icon-compass2" style={{ textAlign: 'center', display: 'none', fontSize: '84px', marginTop: '45px' }}></span>
              </div>
              <button className="select-explorer-button">
                <span className="icon-compass2"></span>
              </button>

              <button onClick={() => {}} className="launch-explorer-button" style={{ display: 'none' }} data-toggle="modal" data-target="#profile-select">
                <span className="icon-compass2"></span> Launch
              </button>
              <button onClick={() => {}} className="explore-explorer-button" style={{ display: 'none' }}>
                <span className="icon-shield2"></span> Explore
              </button>
              <button onClick={() => {}} className="zeochat-explorer-button" style={{ display: 'none' }}>
                <span className="icon-shield2"></span> Zeochat
              </button>
            </div>
            <p style={{ padding: '0 27px', display: 'none' }}>
              Are you exploring campuses and want to <strong>save money and time while learning more</strong>, plus create helpful campus connections?
            </p>
          </div>

          <div className="col-md-6 zeochat-heading animate-box">
            <div className="engagement-box ambassador-box" style={{ background: 'url(images/brand/branding-wood.jpg)', backgroundSize: 'cover', backgroundPositionY: '-42px', float: 'left', marginLeft: '12px' }}>
              <div className="e-box-content">
                <h3 className="center-heading text-center" style={{ color: '#fff' }}>
                  Guide
                  <span style={{ fontSize: '18px' }}> / Earner</span>
                  <input type="radio" name="registertype" className="checkbox ambassador" value="Guide" />
                  <span className="checkmark"></span>
                </h3>
                <span className="icon-shield2" style={{ textAlign: 'center', display: 'none', fontSize: '84px', marginTop: '45px' }}></span>
              </div>
              <button className="select-ambassador-button">
                <span className="icon-shield2"></span>
              </button>

              <button onClick={() => {}} className="qualify-ambassador-button" style={{ display: 'none' }} data-toggle="modal" data-target="#profile-select">
                <span className="icon-shield2"></span> Qualify
              </button>
              <button onClick={() => {}} className="apply-ambassador-button" style={{ display: 'none' }}>
                <span className="icon-shield2"></span> Apply
              </button>
              <button onClick={() => {}} className="start-earning-ambassador-button" style={{ display: 'none' }}>
                <span className="icon-shield2"></span> Start Earning
              </button>
            </div>
            <p style={{ padding: '0 27px', display: 'none' }}>
              Are you an enrolled college student who wants to <strong>earn more money</strong> by sharing your campus experience with others?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

