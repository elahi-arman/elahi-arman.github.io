'use strict';

var Home = React.createClass({
  displayName: 'Home',

  styles: {
    base: {
      height: '75vh',
      width: '75vh',
      margin: 'auto',
      backgroundColor: '#388E3C',
      boxShadow: '0px 0px 5px 1px grey',
      display: 'flex'
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.base, ref: 'infoBox' },
      React.createElement(Avatar, { src: '../assets/images/arman.png' })
    );
  }
});