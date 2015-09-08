var Frame = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  events: {
    click: function(){
      event.preventDefault();
      this.context.router.transitionTo(this.props.link)
    },

    exiting: function(){
      this.setState({hovering: 'scale(0.75)'})
    },

    hovering: function(){
      this.setState({hovering: 'scale(1.0)'})
    }
  },

  styles: {
      frame: {
        margin: '3%',
        border: '2px solid gray',
        transition: 'all 0.5s',
        flex: '1 0 auto'
      }
  },

  getInitialState: function(){
    return {
      hovering: 'scale(0.75)'
    }
  },

  render: function(){
    this.styles.frame.transform = this.state.hovering
    return(
      <div
        style       ={this.styles.frame}
        onClick     ={this.events.click.bind(this)}
        onMouseOver ={this.events.hovering.bind(this)}
        onMouseOut  ={this.events.exiting.bind(this)} >
      </div>

    )
  }
});
