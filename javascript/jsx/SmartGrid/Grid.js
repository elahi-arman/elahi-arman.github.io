import React from 'react';
import GridRow from './GridRow';
import GridItem from './GridItem';

export default class Grid extends React.Component{
  constructor(props){
    super(props);

    this._mapRows = this._mapRows.bind(this);
  }

  //takes in a row and maps each item into a
  _mapItems(row){
    return (
      <GridRow>
        {row.map(function(item, index){
          <GridItem key={index}>{item}</GridItem>
        })}
      </GridRow>
    )
  }

  _mapRows(){
    // debugger;
    //checking for a single child
    if (!Array.isArray(this.props.children))
      return (<GridRow> this.props.children </GridRow>);

    var children = this.props.children.slice(); //duplicate so we don't modufy props
    var rowSize = this.props.rowSize;
    var iterations = this.props.children.length/rowSize;
    var rows = [];                            //this holds the chunked array;

    for (var i=0 ; i < iterations; i++){
      rows.push(children.splice(0, rowSize));
    }

    //push the remaining children into a single array if we have, but because we modified children, we need to compare to the original unmodified
    //more expressive to say modulus, but modulus is slow
    if (iterations * rowSize != this.props.children.length)
      rows.push(children.splice(0, children.length))

    //here we have all the rows split up
    return (rows.map(this._mapItems));
  }

  render(){
    return
     <section className='grid'>{this._mapRows()}</section>;
  }
}

Grid.defaultProps = {
  rowSize: 3
}
