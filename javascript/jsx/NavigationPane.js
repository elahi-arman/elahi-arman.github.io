import React from 'react'

export default class NavigationPane extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div className='navigation-container'>
        <ul>
          <li className='clickable' onClick={this.props.navigateHome}>Home</li>
          <li className='clickable' onClick={this.props.navigateGallery}>Gallery</li>
        </ul>
      </div>
    )
  }
}
