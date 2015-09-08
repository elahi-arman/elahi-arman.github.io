var NavigationPane = React.createClass({

  styles: {
    base: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-around',
      flex: '1 0 auto',
      height: '100%',
      backgroundColor: '#333'
    }
  },

  render: function(){
    return (
      <div style={this.styles.base}>
        <Frame link='projects'/>
        <Frame />
        <Frame />

      </div>
    )
  }
})
