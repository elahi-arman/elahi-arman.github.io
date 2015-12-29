//React Imports
import React from 'react';
import ReactDOM from 'react-dom';

//Individual Module Imports
import NavigationPane from './jsx/NavigationPane';
import Biography from './jsx/Biography';
import Gallery from './jsx/Gallery';

/*

  Non React-ish routing business
    Could be replaced by react-router, but not large scale enough

*/
var navigation = {
  navigateHome(){
    document.getElementById('bio').style.display='flex';
    document.getElementById('gallery').style.display='none';
  },

  navigateGallery(){
    document.getElementById('bio').style.display='none';
    document.getElementById('gallery').style.display='flex';
  }
}

/*

  Render each element into its container

*/

ReactDOM.render(<NavigationPane navigateHome={navigation.navigateHome}
                  navigateGallery={navigation.navigateGallery}
                />, document.getElementById('navigation'));

ReactDOM.render(<Biography />, document.getElementById('bio'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
