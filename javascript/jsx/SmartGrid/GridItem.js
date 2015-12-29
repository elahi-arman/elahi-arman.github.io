import React from 'react';

export default class GridItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section style={GridItem.ItemStyle} className='grid-item'>
        {this.props.children}
      </section>
    )
  }
}

GridItem.ItemStyle = {
  display: 'flex',
  flex: '1 0 auto'
}
