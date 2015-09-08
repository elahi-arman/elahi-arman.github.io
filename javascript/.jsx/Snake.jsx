var Snake = React.createClass ({

  /*

      Styling objects

  */

  styles: {
    inner: {
      width: '100%',
      position: 'absolute',
      borderRadius: '5px'
    },

    outer: {
      height: '100%',
      width: '0.2%',
      position: 'relative'
    }

  },

  /*

      Private helper Functions

  */

  _pulse: function(){

    var incrementedHeight = (this.state.direction) ? this.state.height + 1: this.state.height-1;

    if(incrementedHeight === 100){
      this.styles.inner.bottom = '0px';
      this.setState({direction: !this.state.direction, height: incrementedHeight})
    } else if (incrementedHeight === 0){
       delete this.styles.inner.bottom
      this.setState({direction: !this.state.direction, height: incrementedHeight})
    } else
      this.setState({height: incrementedHeight});

    window.setTimeout(this._pulse, 20);
  },

  /*

        React Lifecycle Functions

  */

  componentWillMount: function(){
    this.styles.outer.background = this.props.outerColor;
    this.styles.inner.background = this.props.innerColor;
  },

  componentDidMount: function(){
    this._pulse();
  },

  /*

      React initializations

  */

  getDefaultProps: function(){
    return{
      innerColor: 'white',
      outerColor: '#333'
    }
  },

  getInitialState: function(){
    return {
      direction: true,
      height: 5
    }
  },

  render() {

    this.styles.inner.height = this.state.height + '%';
    return(
      <div style={this.styles.outer}>
        <div id='inner' style={this.styles.inner} />
      </div>
    )
  }
});
