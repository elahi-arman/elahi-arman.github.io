var Projects = React.createClass({

  styles:{
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

  render: function(){
    return (
      <div style={this.styles.full} >
        <div style={this.styles.content}>
          <ProjectsContent />
        </div>
        <div style={this.styles.divider} />
        <NavigationPane />
      </div>
    )
  }
})
