'use strict';

var Projects = React.createClass({
  displayName: 'Projects',

  styles: {
    full: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      zIndex: '2'
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
        'About Page'
      )
    );
  }
});
