import React from 'react';

export default class GridItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    debugger;
    return (
      <section className='grid-item'>
        {this.props.children}
      </section>
    )
  }
}
