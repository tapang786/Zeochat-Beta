'use client'

export default function ChatTopicsModal() {
  return (
    <div id="chat-topics" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true" style={{ display: 'none' }}>
      <div className="modal-dialog modal-md" style={{ width: '51%' }}>
        <div className="modal-content">
          <div className="modal-header animate-box">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="row">
              <div className="col-md-12 zeochat-heading center-heading text-center" style={{ marginBottom: '0px', zIndex: -1 }}>
                <h3 style={{ fontSize: '27px', color: '#fff', marginBottom: '12px', fontWeight: 'bold', textShadow: '1px 1px 3px #999' }}>
                  Chat Topics
                </h3>
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 animate-box">
                    <h2 style={{ fontSize: '21px', textAlign: 'center' }}>Select from these popular chat topics</h2>

                    <div className="fancy-collapse-panel">
                      <div className="panel-group" id="accordionX1" role="tablist" aria-multiselectable="true">
                        {/* General Topics */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingX1Share">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordionX1" href="#collapseX1Share" aria-expanded="false" aria-controls="collapseX1Share">
                                General Topics
                              </a>
                            </h4>
                          </div>
                          <div id="collapseX1Share" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneShare">
                            <div className="panel-body">
                              <label>
                                <input className="modal-select-general checkmark" type="checkbox" value="General Topics" /> Select this topic to chat about whatever comes to mind.
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Admissions */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingX2AddValue">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordionX1" href="#collapseX2AddValue" aria-expanded="false" aria-controls="collapseX2AddValue">
                                Admissions
                              </a>
                            </h4>
                          </div>
                          <div id="collapseX2AddValue" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingX2AddValue">
                            <div className="panel-body">
                              <label>
                                <input className="modal-select-admissions checkmark" type="checkbox" value="Admissions" /> Select this topic to chat about how to get admitted.
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Courses & Majors */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingX3Earn">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordionX1" href="#collapseX3Earn" aria-expanded="false" aria-controls="collapseX3Earn">
                                Courses &amp; Majors
                              </a>
                            </h4>
                          </div>
                          <div id="collapseX3Earn" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingX3Earn">
                            <div className="panel-body">
                              <label>
                                <input className="modal-select-academic checkmark" type="checkbox" value="Courses & Majors" />                                 Select this topic to get the inside scoop on anything academic.
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Remote Learning */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingX4Earn">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordionX1" href="#collapseX4Earn" aria-expanded="false" aria-controls="collapseX4Earn">
                                Remote Learning
                              </a>
                            </h4>
                          </div>
                          <div id="collapseX4Earn" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingX4Earn">
                            <div className="panel-body">
                              <label>
                                <input className="modal-select-remote checkmark" type="checkbox" value="Remote Learning" /> Select this topic to learn more about learning remotely.
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Social Life */}
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingX5Earn">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordionX1" href="#collapseX5Earn" aria-expanded="false" aria-controls="collapseX5Earn">
                                Social Life
                              </a>
                            </h4>
                          </div>
                          <div id="collapseX5Earn" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingX5Earn">
                            <div className="panel-body">
                              <label>
                                <input className="modal-select-social checkmark" type="checkbox" value="Social Life" /> Select this topic to explore on-campus &amp; remote social life.
                              </label>
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

