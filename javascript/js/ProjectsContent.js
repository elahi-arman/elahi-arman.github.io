'use strict';

var ProjectsContent = React.createClass({
  displayName: 'ProjectsContent',

  styles: {

    innerLeft: {
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '75%',
      height: '75%',
      border: '#DC374C 2px solid'
    },

    centeredRow: {
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
        ' My Projects '
      ),
      React.createElement(
        'a',
        { href: 'https://github.com/elahi-arman/DailyProgrammer' },
        ' Reddit Daily Programmer Challenges '
      ),
      React.createElement(
        'a',
        { href: 'https://github.com/elahi-arman/league-api' },
        ' League of Legends API Wrapper'
      )
    );
  }
});