import React from 'react';
import {render} from 'react-dom';

import PropTypes from 'prop-types';

class Tagline extends React.Component {
  render(){
    return (
      <div className='ae-TaglineContainer'>
        {
          this.props.lines.map((line, index) =>
            <h6 key={index} className='ae-Tagline'>{line}</h6>
        )}
      </div>
    )
  }
}

Tagline.propTypes = {
  lines: PropTypes.array
}
module.exports = Tagline
