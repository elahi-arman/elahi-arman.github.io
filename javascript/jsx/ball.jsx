var NavBall = React.createClass({

  styles : {
    circle : {
      position: 'absolute',
      height: '5vw',
      width: '5vw',
      backgroundColor: 'lightCoral',
      boxShadow: '0px 0px 10px 1px grey',
      margin: 'auto',
      borderRadius: '50%',
      left: '40%',
      top: '50%',
      textAlign: 'center'
    },

    hiddenDiv: {
      visibility: 'hidden',
    }

  },

  getInitialState: function(){
    return {
      hidden: true
    }
  },

  showHidden: function(event){
    this.setState({hidden: !this.state.hidden})
    event.preventDefault()
  },

  render:function(){
    this.styles.hiddenDiv.visibility = this.state.hidden ? 'hidden' : 'visible'
    return (
      <div>
        <div style={this.styles.circle} onDoubleClick={this.showHidden} />
        <div style={this.styles.hiddenDiv} />
      </div>
    )
  }
})
