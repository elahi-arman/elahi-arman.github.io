'use strict';

var Frame = React.createClass({
  displayName: 'Frame',

  contextTypes: {
    router: React.PropTypes.func
  },

  events: {
    click: function click() {
      event.preventDefault();
      this.context.router.transitionTo(this.props.link);
    },

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
      transition: 'all 0.5s',
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
      onClick: this.events.click.bind(this),
      onMouseOver: this.events.hovering.bind(this),
      onMouseOut: this.events.exiting.bind(this) });
  }
});