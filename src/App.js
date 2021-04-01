import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      resumeData: {}
    }
  }

  render = () => {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
  
        <Footer datat={this.state.resumeData.main} />
      </div>
    );
  }
  
}

export default App;
