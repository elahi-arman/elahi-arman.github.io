'use strict';

var Home = React.createClass({
  displayName: 'Home',

  styles: {
    base: {
      height: '100vh',
      width: '100vw'
    },

    divider: {
      width: '0.2%',
      backgroundColor: '#15B7B1'
    },

    seventyFive: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#0F9590'
    }

  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.base },
      React.createElement(
        'div',
        { style: this.styles.seventyFive },
        React.createElement(Intro, null)
      ),
      React.createElement('div', { style: this.styles.divider }),
      React.createElement(NavigationPane, null)
    );
  }
});