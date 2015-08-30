var Frame = React.createClass({

    events: {
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
          transition: 'all 1s',
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
          onMouseOver ={this.events.hovering.bind(this)}
          onMouseOut  ={this.events.exiting.bind(this)} />

      )
    }
});
