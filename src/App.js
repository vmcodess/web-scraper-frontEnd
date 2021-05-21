import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Signin from './components/Signin/Signin'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'
import Home from './components/Home/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  // connect to backend
  componentDidMount() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(console.log)
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: 'true'})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, route } = this.state;
     return (
      <div >
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
          ? <Home /> 
          : (
            route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange} /> 
            : <Register /> 
          )     
        }
      </div>
    )
  }
 
}

export default App;
