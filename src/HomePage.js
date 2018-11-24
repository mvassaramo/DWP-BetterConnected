import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class HomePage extends React.Component {

  render() {
    return(
      <React.Fragment>
      <body>
        <section className="container">
          <div className="hoja"><p></p><p className="better">Better</p><p>Connected</p></div>
          <div className="homepage-option-container">
            <div><Link to='/talk'><button className="homepage-option"></button></Link>I need to talk</div>
            <div><Link to='/events'><button className="homepage-option"></button></Link>I need something to do</div>
            <div><Link to='/help'><button className="homepage-option"></button></Link>I need help</div>
            </div>
        </section>
      </body>

      </React.Fragment>
    )
  }




}
