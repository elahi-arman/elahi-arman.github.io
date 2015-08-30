'use strict';

var Intro = React.createClass({
  displayName: 'Intro',

  styles: {

    innerLeft: {
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '75%',
      height: '75%',
      border: '#15B7B1 2px solid'
    },

    sideWaysContent: {
      flexFlow: 'row wrap',
      width: '100%',
      justifyContent: 'center'
    },

    subtitle: {
      margin: '3%'
    }

  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.innerLeft },
      React.createElement(
        'h1',
        null,
        ' Arman Elahi '
      ),
      React.createElement(
        'div',
        { style: this.styles.sideWaysContent },
        React.createElement(
          'span',
          { style: this.styles.subtitle },
          'Full Stack'
        ),
        React.createElement(
          'span',
          { style: this.styles.subtitle },
          'Android'
        )
      )
    );
  }
});