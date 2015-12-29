import React from 'react';
import Grid from './SmartGrid/Grid';
import Tile from './Tile';

export default class Gallery extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return <Grid>
            <Tile text='League of Legends API' href='https://github.com/elahi-arman/league-api'/>
            <Tile text='JS-Libraries' href='https://github.com/elahi-arman/JS-Libraries'/>
            <Tile text='Python Samples' href='https://github.com/elahi-arman/Python'/>
            <Tile text='Java Samples' href='https://github.com/elahi-arman/Java'/>
            <Tile text='Daily Programmer Questions' href='https://github.com/elahi-arman/DailyProgrammer'/>
          </Grid>
  }
}
