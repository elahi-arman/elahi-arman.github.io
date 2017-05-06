import React from 'react';
import {render} from 'react-dom';

export default class Link extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      background: this.props.bg
    }
   }

  render() {
    return (
      <div style={this.styles} className={this.props.classes}>
        <h3 className='DiagNav-Heading'>{this.props.children}</h3>
      </div>
    )
  }
}
