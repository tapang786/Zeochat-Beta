'use client'

export default function LiveChatLearnModal() {
  return (
    <div id="live-chat-learn" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-md" style={{ width: '51%' }}>
        <div className="modal-content">
          <div className="modal-header animate-box">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row">
              <div className="col-md-12 zeochat-heading center-heading text-center" style={{ marginBottom: '0px', zIndex: -1 }}>
                <h3 style={{ fontSize: '30px', color: '#fff', marginBottom: '12px', fontWeight: '500', textShadow: '1px 1px 3px #999' }}>
                  Connect in Three Ways
                </h3>
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 animate-box">
                    <div className="fancy-collapse-panel" style={{ marginTop: '15px' }}>
                      <div className="panel-group" id="accordion3CT" role="tablist" aria-multiselectable="true">
                        {/* Live Video Zeochat */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingTwoCT">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion3CT" href="#collapseTwoCT" aria-expanded="true" aria-controls="collapseTwoCT" className="collapse">
                                Live Video Zeochat
                              </a>
                            </h4>
                          </div>
                          <div id="collapseTwoCT" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwoCT">
                            <div className="panel-body">
                              <p className="select-connection">
                                <span className="icon-bubbles2" style={{ marginRight: '6px', fontSize: '24px' }}></span> Perfect for full, rich live experiences.
                                <label>
                                  <input className="checkbox" type="checkbox" name="video_select" value="Video" />
                                  Select
                                </label>
                              </p>
                              <p>
                                <span className="icon-users" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> Connect directly with Guides your choice.
                              </p>
                              <p>
                                <span className="icon-feed" style={{ marginRight: '6px', color: '#ловойD128', fontSize: '27px' }}></span> This is <strong>livestreaming chat</strong> at its finest.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Live Voice Zeochat */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingThreeCT">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion3CT" href="#collapseThreeCT" aria-expanded="false" aria-controls="collapseThreeCT" className="collapsed">
                                Live Voice Zeochat
                              </a>
                            </h4>
                          </div>
                          <div id="collapseThreeCT" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThreeCT">
                            <div className="panel-body">
                              <p className="select-connection">
                                <span className="icon-bubbles2" style={{ marginRight: '6px', fontSize: '24px' }}></span> Perfect for Q&A and directing recorded videos.
                                <label>
                                  <input className="checkbox" type="checkbox" name="voice_select" value="Voice" />
                                  Select
                                </label>
                              </p>
                              <p>
                                <span className="icon-users" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> Connect directly with Guides of your choice.
                              </p>
                              <p>
                                <span className="icon-phone2" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> This is <strong>premium voice chat</strong> that's highly informative.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Live Text Zeochat */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingFourCT">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion3CT" href="#collapseFourCT" aria-expanded="false" aria-controls="collapseFourCT" className="collapsed">
                                Live Text Zeochat
                              </a>
                            </h4>
                          </div>
                          <div id="collapseFourCT" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFourCT">
                            <div className="panel-body">
                              <p className="select-connection">
                                <span className="icon-rocket" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> Quickly Connect.
                                <label>
                                  <input className="checkbox" type="checkbox" name="text_select" value="Text..." />
                                  Select
                                </label>
                              </p>
                              <p>
                                <span className="icon-blog" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> Connect via text-based chat with Guides.
                              </p>
                              <p>
                                <span className="icon-loop" style={{ marginRight: '6px', color: '#F1D128', fontSize: '24px' }}></span> This is <strong>premium text chat</strong> for quick Q&A and directing recorded videos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer" style={{ borderTop: 'none' }}>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

