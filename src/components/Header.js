import React from 'react'
import { Route, Link } from 'react-router-dom'


export default class Header extends React.Component {

  render() {
    return(
      <header className="homepage-header">
        <Link to='/'><li className="header-link">Home</li></Link>
        <Link to='/About'><li className="header-link">About</li></Link>
        <Link to='/signup'><li className="header-link">Sign up</li></Link>
      </header>

    )
  }




}
