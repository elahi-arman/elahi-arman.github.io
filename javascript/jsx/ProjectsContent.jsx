var ProjectsContent = React.createClass({
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
    },

  },

  render: function(){
    return (
      <div style={this.styles.innerLeft}>
      <h1> My Projects </h1>
        <a href='https://github.com/elahi-arman/DailyProgrammer'> Reddit Daily Programmer Challenges </a>
        <a href='https://github.com/elahi-arman/league-api'> League of Legends API Wrapper</a>

      </div>
    )
  }
})
