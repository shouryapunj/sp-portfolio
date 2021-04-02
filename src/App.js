import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Work from './Components/Work';

class App extends Component {

  constructor() {
    super()
    this.state = {
      resumeData: {}
    }
  }

  render = () => {
    return (
      <div className="App" style={{ backgroundColor: 'white'}}>
        <Header data={this.state.resumeData.main} />
        <Home data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.main} />
        <Work data={this.state.resumeData.main} />
        <Footer datat={this.state.resumeData.main} />
      </div>
    );
  }
  
}

export default App;
