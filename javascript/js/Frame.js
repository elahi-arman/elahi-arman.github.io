'use strict';

var Frame = React.createClass({
  displayName: 'Frame',

  events: {
    exiting: function exiting() {
      this.setState({ hovering: 'scale(0.75)' });
    },

    hovering: function hovering() {
      this.setState({ hovering: 'scale(1.0)' });
    }
  },

  styles: {
    frame: {
      margin: '3%',
      border: '2px solid gray',
      transition: 'all 1s',
      flex: '1 0 auto'
    }
  },

  getInitialState: function getInitialState() {
    return {
      hovering: 'scale(0.75)'
    };
  },

  render: function render() {
    this.styles.frame.transform = this.state.hovering;
    return React.createElement('div', {
      style: this.styles.frame,
      onMouseOver: this.events.hovering.bind(this),
      onMouseOut: this.events.exiting.bind(this) });
  }
});