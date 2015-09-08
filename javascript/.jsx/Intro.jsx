var Intro = React.createClass({
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
        <h1> Arman Elahi </h1>
        <div style={this.styles.centeredRow}>
          <span style={this.styles.subtitle}>Full Stack</span>
          <span style={this.styles.subtitle}>Android</span>
        </div>
      </div>
    )
  }
})
