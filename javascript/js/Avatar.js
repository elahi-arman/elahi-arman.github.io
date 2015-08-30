'use strict';

var Avatar = React.createClass({
  displayName: 'Avatar',

  styles: {
    rounded: {
      borderRadius: '50%',
      border: '2px solid white',
      height: '25%',
      width: '25%',
      boxShadow: '0px 0px 5px 2px grey'
    }
  },

  render: function render() {
    return React.createElement('img', { src: this.props.src, style: this.styles.rounded });
  }
});