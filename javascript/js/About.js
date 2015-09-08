'use strict';

var About = React.createClass({
  displayName: 'About',

  styles: {
    full: {
      width: '100vw',
      height: '100vh',
      display: 'flex'
    },

    content: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#6E0998'
    },

    divider: {
      width: '0.2%',
      backgroundColor: '#A70FE6'
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.full },
      React.createElement(
        'div',
        { style: this.styles.content },
        React.createElement(AboutContent, null)
      ),
      React.createElement('div', { style: this.styles.divider }),
      React.createElement(NavigationPane, null)
    );
  }
});