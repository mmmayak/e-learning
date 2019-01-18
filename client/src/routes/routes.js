import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer/HomeContainer';

const Routes = () => {
  return(
    <Switch>
      <Route path='/' exact component={HomeContainer}/>
    </Switch>
  )
}

export default Routes;