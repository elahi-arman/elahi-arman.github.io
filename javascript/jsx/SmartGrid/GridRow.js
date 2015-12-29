import React from 'react';
import GridItem from './GridItem';

export default class GridRow extends React.Component{
  constructor(props) {
    super(props);
    this._mapItems = this._mapItems.bind(this);
  }

  _mapItems(item, index){
    return (<GridItem key={index}>{item}</GridItem>);
  }

  render(){
    return (
      <section className='grid-row'>
        {this.props.children.map(this._mapItems)}
      </section>
    )
  }
}
