var About = React.createClass({

  styles:{
    full: {
      width: '100vw',
      height: '100vh',
      display: 'flex'
    },

    content: {
      flex: '3 0 auto',
      height: '100%',
      backgroundColor: '#6E0998'
    },

    divider: {
      width: '0.2%',
      backgroundColor: '#A70FE6'
    }
  },

  render: function(){
    return (
      <div style={this.styles.full} >
        <div style={this.styles.content}>
          <AboutContent />
        </div>
        <div style={this.styles.divider} />
        <NavigationPane />
      </div>
    )
  }
})
