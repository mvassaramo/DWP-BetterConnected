import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import { Route, Link } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './HomePage'
import About from './components/About'
import SignupForm from './components/SignupForm'
import EventsContainer from './containers/EventsContainer'
import TalkContainer from './containers/TalkContainer'
import HelpContainer from './containers/HelpContainer'

import { events }  from './data'

// const MeetupAPI = 'https://api.meetup.com/2/cities'

class App extends Component {

  state = {
    events: []
  }

  // getEvents = () => {
  //   return fetch(MeetupAPI)
  //   .then(resp => resp.json())
  //   .then(results => this.setState({ }))
  // }

  getEvents = () => this.setState({ events: events })

  componentDidMount() {
    this.getEvents()
  }

  render() {

    return (
      <React.Fragment>
        <Header />

        <div>
          <Route exact path='/About' render={props => <About {...props} />} />
          <Route exact path='/signup' render={props => <SignupForm {...props} />} />
          <Route exact path='/talk' render={props => <TalkContainer {...props} />} />
          <Route exact path='/events' render={props => <EventsContainer {...props} events={this.state.events}/>} />
          <Route exact path='/help' render={props => <HelpContainer {...props} />} />

    </div>

        <Route exact path='/' render={props => <HomePage {...props} />} />

      </React.Fragment>
    )
  }
}

export default App;
