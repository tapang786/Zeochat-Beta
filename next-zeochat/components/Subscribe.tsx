'use client'

export default function Subscribe() {
  const handleEmailFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.value = ''
  }

  const preventRealSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Keep legacy markup but prevent navigation during migration
    e.preventDefault()
  }

  return (
    <div id="zeochat-subscribe" className="subs-img" style={{ backgroundImage: 'url(images/intro/adventures.jpg)' }} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center zeochat-heading animate-box">
            <h2 className="explorer-view">Explore the World</h2>
            <p className="explorer-view">Go Anywhere. Do Anything. Instantly.</p>
          </div>
        </div>

        <div id="waitlist-process" className="row animate-box">
          <div className="col-md-6 col-md-offset-3">
            <div className="row">
              <div className="col-md-12">
                <form name="process" className="form-inline qbstp-header-subscribe" action="https://zeochat.invisofts.in/process2.php" method="post" noValidate onSubmit={preventRealSubmit}>
                  <input type="checkbox" name="phone" value="1" autoComplete="off" className="checkbox phone" />
                  <textarea name="name" className="fullname form-control footer-name" style={{ display: 'none' }}></textarea>

                  <div className="col-three-forth">
                    <div className="form-group">
                      <input type="email" name="email2" className="form-control" id="email-control" onFocus={handleEmailFocus} placeholder="Start by entering your email address" />
                      <input type="text" name="footermessage" style={{ display: 'none' }} />
                      <input type="text" name="website" className="input-website" placeholder="Enter Your Website" />
                      <input type="text" name="my_password" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                      <p id="email-validation-message" style={{ marginTop: 5, fontSize: 12 }}></p>
                    </div>
                  </div>

                  <div className="col-one-third">
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary button-footer disabled-button" disabled>Start</button>
                    </div>
                  </div>

                  <div className="g-recaptcha recaptcha-footer" data-sitekey="6LcSqfMdAAAAAB-Y1etJNaUdrXeR9LdXemyZhcYO" data-callback="enableBtn" style={{ display: 'none', margin: 0, float: 'left', left: 0, marginTop: 12 }}></div>

                  <div id="success-two" style={{ display: 'none', color: '#fff', textAlign: 'center', marginTop: 12 }}>
                    <p>You've been added to our waitlist! We will be in touch soon. </p>
                  </div>
                  <div id="error-two" style={{ display: 'none', color: 'red', textAlign: 'left', width: '100%', marginTop: 0, textShadow: '1px 1px 1px #000' }}>
                    <p>Something went wrong. Try refreshing and submitting the form again. </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
