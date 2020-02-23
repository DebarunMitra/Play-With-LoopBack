import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups} />
      <Route exact path="/about" component={About} />
      <Route exact path="/letsmeets/add" component={AddMeetup} />
      <Route exact path="/letsmeets/edit/:id" component={EditMeetup} />
      <Route exact path="/letsmeets/:id" component={MeetupDetails} />
    </Switch>
  </main>
);

export default Main;
