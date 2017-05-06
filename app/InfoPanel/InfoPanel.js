import React from 'react';
import {render} from 'react-dom';

import Tagline from './Tagline/Tagline.js'

class InfoPanel extends React.Component {
  render() {
    return (
      <div className='ae-InfoPanel'>
        <img className='ae-InfoPanelProfilePhoto' src={this.props.profilePhoto} />
        <Tagline lines={this.props.lines} />
        <div className='ae-blogEntry'></div>
      </div>
    )
  }
}

module.exports = InfoPanel
