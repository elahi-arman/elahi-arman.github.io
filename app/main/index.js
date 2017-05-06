import React from 'react';
import {render} from 'react-dom';

import InfoPanel from '../InfoPanel/InfoPanel.js'
import VerticalNav from '../DiagNav/VerticalNav.js'

class App extends React.Component {
  render() {
    const tagline = ['Proofpoint · DevOps Engineer', 'Android · React · Python']

    return (
      <div className='app-container'>
        <InfoPanel profilePhoto='./assets/images/profile.jpg' lines={tagline}/>
        <VerticalNav />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
