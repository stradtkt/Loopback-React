import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';


const Main = () => (
    <Switch>
        <Route exact={true} path='/' component={Meetups}/>
        <Route exact={true} path='/about' component={About} />
    </Switch>
);

export default Main;
