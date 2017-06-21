import React from 'react';

import PropTypes from 'extended-proptypes';

export default class ExpandingPane extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='pane--expanding'>
        {this.props.children}
      </div>
    )
  }
}
