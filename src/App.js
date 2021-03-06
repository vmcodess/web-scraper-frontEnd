import React, { Component } from 'react';
import Signin from './components/Signin/Signin'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'
import Home from './components/Home/Home'

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      name: data.name,
      email: data.email,
    }})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onRouteChange= (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          route ==='home'
          ? <Home />
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    )
  }
}

export default App;
