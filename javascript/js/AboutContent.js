'use strict';

var AboutContent = React.createClass({
  displayName: 'AboutContent',

  styles: {

    innerLeft: {
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      display: 'flex',
      width: '75%',
      height: '75%',
      border: '#A70FE6 2px solid'
    },

    centeredRow: {
      flexFlow: 'row wrap',
      width: '100%',
      justifyContent: 'center'
    },

    subtitle: {
      margin: '3%'
    },

    logo: {
      flex: '1 0 50%',
      margin: 'auto'
    },

    banner: {
      flex: '3 0 auto',
      margin: 'auto'
    },

    logoBanner: {
      display: 'flex'
    }

  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.innerLeft },
      React.createElement(
        'h1',
        null,
        ' About Me '
      ),
      React.createElement(
        'div',
        { style: this.styles.logoBanner },
        React.createElement(
          'div',
          { style: this.styles.banner },
          'Bellarmine College Preparatory'
        )
      ),
      React.createElement(
        'div',
        { style: this.styles.logoBanner },
        React.createElement(
          'div',
          { style: this.styles.banner },
          'Santa Clara University'
        )
      )
    );
  }
});