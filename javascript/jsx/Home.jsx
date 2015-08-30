var Home = React.createClass ({

  styles: {
    base: {
      height: '100vh',
      width: '100vw',
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

    seventyFive:{
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
    },

  },

  render() {
    return(
      <div style={this.styles.base}>

        <div style={this.styles.seventyFive}>
          <div style={this.styles.innerLeft}>
            <h1> Arman Elahi </h1>
            <div style={this.styles.sideWaysContent}>
              <span style={this.styles.subtitle}>Full Stack Developer</span>
              <span style={this.styles.subtitle}>Android Developer</span>
            </div>
          </div>
        </div>

        <div style={this.styles.divider} />

        <div style={this.styles.twentyFive}>
          <Frame />
          <Frame />
          <Frame />
          <DraggaBall />
        </div>
      </div>
    )
  }
});
