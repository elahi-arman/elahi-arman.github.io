var Home = React.createClass ({

  styles: {
    base: {
      height: '75vh',
      width: '75vh',
      margin: 'auto',
      backgroundColor: '#388E3C',
      boxShadow: '0px 0px 5px 1px grey',
      display: 'flex'
    }
  },

  render() {
    return(
      <div style={this.styles.base} ref='infoBox'>
        <Avatar src='../assets/images/arman.png' />
      </div>
    )
  }
});
