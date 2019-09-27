import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main" style={{ textAlign: 'center' }}>
            <img style={{ 
              display: 'inline-block',
              width: '25%', 
              padding: '8px', 
              borderRadius: '100%', 
              borderLeft: '1px solid white',
              borderRight: '1px solid #2d2d2d',
              boxShadow: 'inset 3px 1px 1px #f1f0f0'
          }} 
            src={pic01} alt="Picture of Matt." />
          </span>
          <h3>Transforming what it means to be a developer</h3>
          <p>
            Matt goes above, beyond when it
            comes to learning, creating with Front End Technology.
          </p>
          <h3>Revolutionizing Code</h3>
          <p>
            Matt loves to push the boundaries of what is possible when 
            it comes to website, app development. 
          </p>
          <h3>Some of The Technology Matt Uses:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>ES6+</li>
            <li>Wordpress</li>
            <li>Shopify</li>
            <li>Funnel Systems</li>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>Apollo</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>RStudio</li>
            <li>UI/UX</li> 
            <li>Figma</li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
      
            <div className="image main">
             <a href="https://carolinas.aaa.com/membership/">
              <img src={pic02} alt="A glimpse of AAA site." />
              </a>
            </div>
          <h3>AAA</h3>
          <p>
            AAA is a privately held non-profit national 
            member association and service organization with over 58 million members 
            in the United States and Canada. Matt currently works here during the day 
            as a web developer in AAA Carolina's Marketing Department. Matt currently
            uses Wordpress, Bootstrap 4, Javascript, jQuery, ReactJS, GraphQL, Apollo and more 
            while working primarily on the main website as well as other projects that involve AAA. 
          </p>
          <a href="https://carolinas.aaa.com/membership/"><h3>Visit AAA</h3></a>
          <div className="image main">
            <a href="https://camelcitygoods.com">
              <img src={pic04} alt="A glimpse of Camel City Goods site." />
            </a>
          </div>
          <h3>
            CAMEL CITY GOODS
          </h3>
          <p>
            Camel City Goods is a retail brand that was born in Winston Salem, NC via the 
            Airtype agency. Matt developed their Shopify website while working for the Airtype agency
            a few years ago using technologies such as Liquid, HTML, CSS, jQuery, Javascript, JSON, Gulp, Git.
          </p>
          <a href="https://camelcitygoods.com"><h3>Visit Camel City Goods</h3></a>
          <div className="image main">
            <a href="https://ddn.com">
              <img src={pic05} alt="A glimpse of the DDN website." />
            </a>
          </div>
          <h3>
            DDN
          </h3>
          <p>
            DDN is America's largest Private Storage Provider. They are headquartered in Chatsworth,
            California. Matt worked on several templates and 
            created new UI functionality for their Wordpress, Bootstrap Website in the form of new UI Components.
          </p>
          <a href="https://ddn.com"><h3>Visit DDN</h3></a>
          <div className="image main">
            <a href="https://razzafrazza.github.io/AIA/">
              <img src={pic06} alt="A glimpse of the AIA website." />
            </a>
          </div>
          <h3>AMERICAN INSTITUTE OF ARCHITECTS</h3>
          <p>
          Based in Washington, D.C. the AIA has been the leading professional membership association for 
          licensed architects, emerging professionals, and allied partners since 1857. 
          Matt created American Institute of Architect's Single Page Application 
          using HTML, CSS, jQuery, SVGS. 
          </p>
          <a href="https://razzafrazza.github.io/AIA/"><h3>Visit AIA</h3></a>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <h3>THE BEGINNING</h3>
          <p>
            Matt developed his first website in middle school after his favorite games at the 
            time were blocked by the school's IT Administrator. The site he built was a way for himself, classmates to circumvent this block. He took his first freelance assignment
            as a web developer for a college student at UNCC in Charlotte, NC while he was in highschool. 
            He became better at HTML, CSS partially due to the popularity of the social media website Myspace and the
            online game Neopets.
          </p>
          <p> Both Myspace, Neopets allowed users to create custom profiles using Html, CSS. 
            Matt took on some freelance work building custom Myspace, Neopets layouts. 
            Matt also launched his first Wordpress blog that was a news aggregate for the affairs of Tiger Woods. 
            Matt studied Internet Marketing during high school and thought this would be an easy site to rank on Google. 
            He was right. </p>
          <h3>INNOVATION, PASSION</h3>
          <p>
            Matt believes that if he doesn't learn something new on any given day, that day is a failure. 
            Matt believes in honesty, integrity when it comes to business.</p>
            <p>
            Matt currently takes online classes via MITx as he hopes to one day get a masters degree from MIT.
            </p>
            <p>
            Matt stays on top of the latest trends in Development, Design #reactamsterdam 
            <br></br><br></br>
            Matt is someone you can count on.  
            </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/mattliveshere"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/mattshaver.webcreator" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mattShaverWebCreator"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
