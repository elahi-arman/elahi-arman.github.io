import React from 'react'
import Grid from './SmartGrid/Grid';

export default class Gallery extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return <Grid>
            <p> Hello </p>
            <p> Hello </p>
          </Grid>
  }
}
