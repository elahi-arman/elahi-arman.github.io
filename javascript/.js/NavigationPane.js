'use strict';

var NavigationPane = React.createClass({
  displayName: 'NavigationPane',

  styles: {
    base: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-around',
      flex: '1 0 auto',
      height: '100%',
      backgroundColor: '#333'
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.base },
      React.createElement(Frame, { link: 'projects' }),
      React.createElement(Frame, null),
      React.createElement(Frame, null)
    );
  }
});