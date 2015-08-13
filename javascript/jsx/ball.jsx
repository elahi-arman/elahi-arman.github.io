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
      height: '100vh',
      width: '30vw',
      backgroundColor: 'mediumOrchid'
    }

  },

  componentDidMount: function(){
      var pixeled = this.percentToPixels({
        height: this.styles.circle.height,
        width: this.styles.circle.width
      }, document.getElementById('nav-circle'))

      this.styles.circle.left = pixeled.left
      this.styles.circle.top = pixeled.top
  },


  getInitialState: function(){
    return {
      hidden: true,
      left: '40%'
    }
  },

  showHidden: function(event){
    this.setState({hidden: !this.state.hidden})
    this.styles.circle.left = parseInt(this.styles.circle.left) + event.clientX + 'px'
    event.preventDefault()
  },

  moveBitch: function(event){
    this.setState({ left: event.clientX + 'px'})
  },

  /*
    percentToPixels(percentage)
    Convert a CSS percentage to its pixel equivalent
    Input :
      percentage : {
        height: [decimal],
        width: [decimal],
      }

    Outputs:
      percentage: {
        height: [String],
        width: [String],
        top: [String],
        left: [String]
      }

    */
  percentToPixels: function(percentage, referencedElt){
    return {
      height: (window.innerHeight * percentage.height) + 'px',
      width: (window.innerWidth * percentage.width) + 'px',
      left: referencedElt.offsetLeft + 'px',
      top: referencedElt.offsetTop + 'px'
    }
  },

  render:function(){
    this.styles.hiddenDiv.opacity = this.state.hidden ? '0' : '0.8'
    return (
      <div>
        <div id='nav-circle' ref='nav-circle' style={this.styles.circle} onClick={this.showHidden} onMouseMove={this.moveBitch}/>
        <div style={this.styles.hiddenDiv} />
      </div>
    )
  }
})
