import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';


const Main = () => (
    <Switch>
        <Route exact={true} path='/' component={Meetups}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/meetups/add' component={AddMeetup}/>
        <Route exact={true} path='/meetups/:id' component={MeetupDetails}/>
    </Switch>
);

export default Main;
