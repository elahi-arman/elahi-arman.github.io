//React Imports
import React from 'react'
import ReactDOM from 'react-dom'

//Individual Module Imports
import NavigationPane from './jsx/NavigationPane'
import Biography from './jsx/Biography'

/*

  Non React-ish routing business
    Could be replaced by react-router, but not large scale enough

*/

navigateHome(){
  document.getElementById('bio').display='flex';
  document.getElementById('gallery').display='none';
}

navigateGallery(){
  document.getElementById('bio').display='none';
  document.getElementById('gallery').display='flex';
}

navigateResume(){
  document.getElementById('bio').display='none';
  document.getElementById('gallery').display='none';
}

/*

  Render each element into its container

*/

ReactDOM.render(<NavigationPane />, document.getElementById('navigation'));
ReactDOM.render(<Biography />, document.getElementById('bio'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
