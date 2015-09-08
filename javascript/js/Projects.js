'use strict';

var Projects = React.createClass({
  displayName: 'Projects',

  styles: {
    full: {
      width: '100vw',
      height: '100vh',
      display: 'flex'
    },

    content: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#A70D24'
    },

    divider: {
      width: '0.2%',
      backgroundColor: '#DC374C'
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { style: this.styles.full },
      React.createElement(
        'div',
        { style: this.styles.content },
        React.createElement(ProjectsContent, null)
      ),
      React.createElement('div', { style: this.styles.divider }),
      React.createElement(NavigationPane, null)
    );
  }
});