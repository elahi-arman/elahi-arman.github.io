var DraggaBall = React.createClass({

  //PRIVATE OBJECTS TO THE VARIABLE
  clickLock: false,

  styles: {
    ball: {
      borderRadius: '50%',
      backgroundColor: '#5BE2DD',
      position: 'absolute',
      cursor: 'pointer',
    }
  },

  // TODO: TURN THIS INTO MY OWN DRAGGING SHIT
  //FUNCTIONS FOR REGISTERING EVENTS
  events: {

    xBall: null,
    yBall: null,


    move: function(event){
      var left = (event.clientX) -this.xBall;

      if (event.clientX-this.xBall < 0)
          left = 0;

      if(this.clickLock){
        this.setState({
          left: left,
          top: event.clientY-this.yBall
        });
      }
    },

    registerClickLock: function(event){
      console.log('Locked')
      this.clickLock = true;
      this.yBall = event.clientY - event.target.offsetTop
      this.xBall = event.clientX - event.target.offsetLeft
    },


    unregisterClickLock: function(event){
      console.log('unlocked')
      this.clickLock = false;
    },


  },

  //HELPER FUNCTIONS

  //REACT COMPONENT LIFECYCLE FUNCTIONS
  componentWillMount: function(){
    this.styles.ball.width = percentToAbsolutePixels(10, 'HEIGHT');
    this.styles.ball.height = percentToAbsolutePixels(10, 'HEIGHT');
    document.body.onMouseUp = this.events.unregisterClickLock;

  },

  componentDidMount: function(){
    this.setState({left: React.findDOMNode(this.refs.ball).offsetLeft - (this.styles.ball.width / 2)})
  },

  getInitialState: function(){
    return{
      left: 0,
      top: percentToAbsolutePixels(50, 'HEIGHT')
    }
  },

  render: function(){

    if (this.state.left != 0)
      this.styles.ball.left = this.state.left
      
    this.styles.ball.top = this.state.top


    return(
      <div  onMouseDown ={this.events.registerClickLock.bind(this)}
            onMouseUp   ={this.events.unregisterClickLock.bind(this)}
            onMouseMove ={this.events.move.bind(this)}
            ref         ='ball'
            style       ={this.styles.ball}/>
    )
  }
})

function percentToAbsolutePixels(percent, dimension){
  if (dimension === 'WIDTH')
    return window.innerWidth * percent / 100;

  if (dimension === 'HEIGHT')
    return window.innerHeight * percent / 100;
}
