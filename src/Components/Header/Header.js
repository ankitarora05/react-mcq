import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to ="/"><h1 className="App-title">Up<span>G</span>rad</h1></Link>
        </header>
      </div>
    );
  }
}

export default Header;
