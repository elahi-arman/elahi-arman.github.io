import React from 'react';
import classNames from 'classnames';

export default class SlidingPane extends React.Component{
  constructor(props){

    super(props);

    //State Initialization
    this.state= {
      expanded: false
    };

    //Method Binding
    this._handleArrowClick = this._handleArrowClick.bind(this);
  }

  _createList(item, index){
    return <li key={index}>{item}</li>;
  }

  _handleArrowClick(){
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render(){

    var contentClass = classNames({
      'content': true,
      'expanded': this.state.expanded,
      'fadeInDown': true
    });

    var arrowClass = classNames({
      'arrow-down': !this.state.expanded,
      'arrow-up': this.state.expanded
    });

    return(
      <div className='pane'>
        <section className='heading'>
          <h2>{this.props.heading}</h2>
          <div className={arrowClass} onClick={this._handleArrowClick}></div>
        </section>
        <section className={contentClass}>
          <ul>
            {this.props.items.map(this._createList)}
          </ul>
        </section>
      </div>
    )
  }
}
