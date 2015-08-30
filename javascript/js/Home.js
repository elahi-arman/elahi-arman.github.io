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

    innerLeft: {
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '75%',
      height: '75%',
      border: '#15B7B1 2px solid'
    },

    seventyFive: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#0F9590'
    },

    sideWaysContent: {
      flexFlow: 'row wrap',
      width: '100%',
      justifyContent: 'center'
    },

    subtitle: {
      margin: '3%'
    },

    twentyFive: {
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
      React.createElement(
        'div',
        { style: this.styles.seventyFive },
        React.createElement(
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
              'Full Stack Developer'
            ),
            React.createElement(
              'span',
              { style: this.styles.subtitle },
              'Android Developer'
            )
          )
        )
      ),
      React.createElement('div', { style: this.styles.divider }),
      React.createElement(
        'div',
        { style: this.styles.twentyFive },
        React.createElement(Frame, null),
        React.createElement(Frame, null),
        React.createElement(Frame, null),
        React.createElement(DraggaBall, null)
      )
    );
  }
});