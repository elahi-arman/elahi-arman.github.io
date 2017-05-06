import React from 'react';
import {render} from 'react-dom';

export default class Border extends React.Component {

  constructor(props) {
    super(props);
    this.gradient = {
      background: `linear-gradient(to ${this.props.reversed ? 'right' : 'left'} bottom, ${this.props.from} 50%, ${this.props.to} 52%)`
    }
   }

  render() {
    return <div style={this.gradient} className={this.props.classes} />
  }
}
