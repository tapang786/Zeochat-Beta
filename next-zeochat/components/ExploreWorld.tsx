'use client'

type Feature = {
  icon: string
  text: string
}

type ExploreExperience = {
  formId: string
  title: string
  displayTitle: string
  chatSelect: string
  date: string
  image: string
  descriptionTitle: string
  features: Feature[]
  price: string
  liveDate: string
  time: string
  guideName: string
}

const exploreExperiences: ExploreExperience[] = [
  {
    formId: 'form_one',
    title: 'African Safari',
    displayTitle: 'African Safari',
    chatSelect: 'Adventures',
    date: '11/04/2025',
    image: 'images/intro/lion.jpg',
    descriptionTitle: 'This Adventure chat includes',
    features: [
      { icon: 'icon-users', text: 'A Jeep ride into the African Savannah' },
      { icon: 'icon-chat', text: 'Big cats, elephants, wildebeest' }
    ],
    price: '$247',
    liveDate: '11/04/2025',
    time: '11:00am (PST)',
    guideName: 'The Guide of Africa'
  },
  {
    formId: 'form_two',
    title: 'Tour of Tokyo',
    displayTitle: 'Tour of Tokyo',
    chatSelect: 'Adventures',
    date: '11/04/2025',
    image: 'images/intro/tokyo1.jpg',
    descriptionTitle: 'This Tour chat includes',
    features: [
      { icon: 'icon-users', text: 'A walking tour &amp; chat' },
      { icon: 'icon-chat', text: "Covering Tokyo's popular districts" }
    ],
    price: '$68',
    liveDate: '11/04/2025',
    time: '1:00pm (PST)',
    guideName: 'Your Guide in Japan'
  },
  {
    formId: 'form_three',
    title: 'Skydive',
    displayTitle: 'Skydiving',
    chatSelect: 'Adventures',
    date: '11/04/2025',
    image: 'images/intro/skydive.jpg',
    descriptionTitle: 'This Adventure chat includes',
    features: [
      { icon: 'icon-users', text: 'Skydiving!' },
      { icon: 'icon-chat', text: '18,000 ft drop from our airplane' }
    ],
    price: '$47',
    liveDate: '11/04/2025',
    time: '3:00pm (PST)',
    guideName: 'The Skydiving Guide'
  },
  {
    formId: 'form_four',
    title: 'Kiteboarding',
    displayTitle: 'Kiteboarding',
    chatSelect: 'Adventures',
    date: '11/05/2025',
    image: 'images/intro/kiteboarding.jpg',
    descriptionTitle: 'This Adventure chat includes',
    features: [
      { icon: 'icon-users', text: 'Ride the wind &amp; waves with me' },
      { icon: 'icon-chat', text: 'Live from Turks & Caicos' }
    ],
    price: '$53',
    liveDate: '11/05/2025',
    time: '10:00am (PST)',
    guideName: 'Your Kitesurfing Guide'
  },
  {
    formId: 'form_five',
    title: 'Wildflower Collecting',
    displayTitle: 'Wildflower Collecting',
    chatSelect: 'Adventures',
    date: '11/04/2025',
    image: 'images/intro/wildflowers.jpg',
    descriptionTitle: 'This Adventure chat includes',
    features: [
      { icon: 'icon-users', text: "Let's collect wildflowers" },
      { icon: 'icon-chat', text: "I'll ship your favorites to you!" }
    ],
    price: '$46',
    liveDate: '11/04/2025',
    time: '3:00pm (PST)',
    guideName: 'A Wildflower Guide'
  }
]

export default function ExploreWorld() {
  return (
    <div className="zeochat-classes">
      <div className="container-fluid owl-theme">
        <div className="row">
          <div className="col-md-12 zeochat-heading center-heading text-center animate-box">
            <h3 className="explorer-view">
              <span className="icon-library" style={{ fontSize: '39px', color: '#fff', boxShadow: '1px 1px 1px #000', textShadow: '1px 1px 1px #777', background: '#F1D128', padding: '21px', borderRadius: '50%', marginRight: '12px' }}></span>{' '}
              Explore <strong>YOUR WORLD</strong> like never before
            </h3>
          </div>
        </div>
        <div className="row" id="c1">
          <div className="col-md-12 animate-box">
            <div className="owl-carousel">
              {exploreExperiences.map((experience, index) => (
                <div key={index} className="item">
                <div className="classes">
                    <form id={experience.formId} className="zeochat-form" data-value={experience.title}>
                      <input type="hidden" name="campus" value={experience.title} />
                      <input type="hidden" name="chat-select" value={experience.chatSelect} />
                      <input type="hidden" name="date" value={experience.date} />
                    <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                        <div className="classes-img" style={{ backgroundImage: `url(${experience.image})` }}></div>
                    </a>
                    <div className="wrap">
                      <div className="desc">
                        <h2 className="campus">
                          <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                              {experience.displayTitle}
                          </a>
                        </h2>
                          <h4>{experience.descriptionTitle}</h4>
                          <ul>
                            {experience.features.map((feature, idx) => (
                              <li key={idx}>
                                <span className={feature.icon}></span>
                                <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                          </li>
                            ))}
                        </ul>
                      </div>
                      <div className="pricing">
                        <ul className="details">
                          <li className="price">
                            <span>
                              <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                                  {experience.price}
                              </a>
                            </span>
                          </li>
                          <li>
                              <span className="loader__dot">LIVE</span> on {experience.liveDate} &nbsp;{' '}
                            <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                              <span className="icon-calendar"></span>
                            </a>
                          </li>
                          <li>
                              {experience.time} &rarr;{' '}
                            <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                              Join Waitlist
                            </a>
                          </li>
                          <li>
                            by{' '}
                            <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                                <span className="icon-user2"></span> {experience.guideName}
                            </a>
                            <span className="more">
                              <a href="#" onClick={(e)=>e.preventDefault()} data-toggle="modal" data-target="#profile-select">
                                <i className="icon-link"></i>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

