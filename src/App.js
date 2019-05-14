import React, { Component } from 'react';

import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu';
import Backdrop from './components/Backdrop';
import PageWrapper from './components/PageWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sideMenuIsOpen: false
     }
  }

  sideMenuToggle = () => {
    this.setState(prevState => {
      return {sideMenuIsOpen: !prevState.sideMenuIsOpen}
    })
  }
  
  render() {
    return (
      <>
        <Navbar toggleSideMenuHandler={this.sideMenuToggle} />
        { this.state.sideMenuIsOpen && 
          <>
            <Backdrop toggleSideMenuHandler={this.sideMenuToggle} /><SideMenu />
          </>}
        
        <PageWrapper />
      </>
    );
  }
}

export default App;
