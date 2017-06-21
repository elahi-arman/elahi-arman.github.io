import React from 'react';

import Border from './Border/Vertical.js'
import Link from './Link/Link.js'

import PropTypes from 'extended-proptypes';

export default class VerticalNav extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='DiagNav-vertical'>
        <Link classes='DiagNav-destination' bg='#7CD3C8'> Projects </Link>
        <Border classes='DiagNav-border--normal' from='#7CD3C8' to='#EA8153' />
        <Link classes='DiagNav-destination' bg='#EA8153'> Blog </Link>
        <Border classes='DiagNav-border--normal' from='#EA8153' to='#BFDBA7 ' reversed/>
        <Link classes='DiagNav-destination' bg='#BFDBA7 '> Resume </Link>
      </div>
    )
  }
}
