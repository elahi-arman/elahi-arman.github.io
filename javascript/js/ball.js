'use strict';

var NavBall = React.createClass({
  displayName: 'NavBall',

  styles: {
    circle: {
      position: 'absolute',
      height: '5vw',
      width: '5vw',
      backgroundColor: 'lightCoral',
      boxShadow: '0px 0px 10px 1px grey',
      margin: 'auto',
      borderRadius: '50%',
      left: '40%',
      top: '50%',
      textAlign: 'center'
    },

    hiddenDiv: {
      height: '100vh',
      width: '30vw',
      backgroundColor: 'mediumOrchid'
    }

  },

  componentDidMount: function componentDidMount() {
    var pixeled = this.percentToPixels({
      height: this.styles.circle.height,
      width: this.styles.circle.width
    }, document.getElementById('nav-circle'));

    this.styles.circle.left = pixeled.left;
    this.styles.circle.top = pixeled.top;
  },

  getInitialState: function getInitialState() {
    return {
      hidden: true,
      left: '40%'
    };
  },

  showHidden: function showHidden(event) {
    this.setState({ hidden: !this.state.hidden });
    this.styles.circle.left = parseInt(this.styles.circle.left) + event.clientX + 'px';
    event.preventDefault();
  },

  moveBitch: function moveBitch(event) {
    this.setState({ left: event.clientX + 'px' });
  },

  /*
    percentToPixels(percentage)
    Convert a CSS percentage to its pixel equivalent
    Input :
      percentage : {
        height: [decimal],
        width: [decimal],
      }
      Outputs:
      percentage: {
        height: [String],
        width: [String],
        top: [String],
        left: [String]
      }
      */
  percentToPixels: function percentToPixels(percentage, referencedElt) {
    return {
      height: window.innerHeight * percentage.height + 'px',
      width: window.innerWidth * percentage.width + 'px',
      left: referencedElt.offsetLeft + 'px',
      top: referencedElt.offsetTop + 'px'
    };
  },

  render: function render() {
    this.styles.hiddenDiv.opacity = this.state.hidden ? '0' : '0.8';
    return React.createElement(
      'div',
      null,
      React.createElement('div', { id: 'nav-circle', ref: 'nav-circle', style: this.styles.circle, onClick: this.showHidden, onMouseMove: this.moveBitch }),
      React.createElement('div', { style: this.styles.hiddenDiv })
    );
  }
});
//# sourceMappingURL=C:\Users\Arman\Documents\Programming\elahi-arman.github.io\ball.js.map