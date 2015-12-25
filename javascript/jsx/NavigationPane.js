import React from 'react'

export default class NavigationPane extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div className='navigation-container'>
        <ul>
          <li> Home </li>
          <li> Gallery </li>
          <li> Resume </li>
        </ul>
      </div>
    )
  }
}
