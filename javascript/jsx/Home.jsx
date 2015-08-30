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

    seventyFive:{
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#0F9590'
    },


  },

  render() {
    return(
      <div style={this.styles.base}>

        <div style={this.styles.seventyFive}>
          <Intro />
        </div>

        <div style={this.styles.divider} />

        <NavigationPane />
      </div>
    )
  }
});
