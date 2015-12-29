import React from 'react';

export default class Tile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='tile'>
        <a href={this.props.href}>{this.props.text}</a>
      </section>
    )
  }
}
