import React from 'react'

export default class NavigationPane extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div className='navigation-container'>
        <ul>
          <li onClick={this.props.navigateHome}>Home</li>
          <li onClick={this.props.navigateGallery}>Gallery</li>
          <li onClick={this.props.navigateResume}>Resume</li>
        </ul>
      </div>
    )
  }
}
