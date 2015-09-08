'use strict';

var Home = React.createClass({
  displayName: 'Home',

  styles: {
    full: {
      width: '100vw',
      height: '100vh',
      display: 'flex'
    },

    content: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#0F9590'
    },

    divider: {
      width: '0.2%',
      backgroundColor: '#15B7B1'
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.full },
      React.createElement(
        'div',
        { style: this.styles.content },
        React.createElement(Intro, null)
      ),
      React.createElement(NavigationPane, null)
    );
  }
});