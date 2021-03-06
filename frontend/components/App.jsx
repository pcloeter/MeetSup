import React from 'react';
import NavContainer from "./nav/nav_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import { Route, HashRouter, Switch} from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import GroupIndexContainer from './groups/group_index_container';
import CreateGroupContainer from './groups/create_group_container';
import GroupShowContainer from './groups/group_show_container';
import FooterContainer from './footer/footer_container';
import CreateEventContainer from './events/create_event_container';
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import GroupEventsContainer from './groups/group_events_container';

const App = () => (
  <div>
    <header>
        <Route path="/" component={NavContainer} />
    </header>

    <Switch>
      <ProtectedRoute exact path="/create" component={CreateGroupContainer} />
      <Route exact path="/groups" component={GroupIndexContainer} />
      <Route exact path="/events" component={GroupEventsContainer} />
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path="/groups/:groupId" component={GroupShowContainer} />
      <ProtectedRoute exact path="/groups/:groupId/events/create" component={CreateEventContainer} />
      <ProtectedRoute exact path="/groups/:groupId/events/" component={EventIndexContainer} />
      <ProtectedRoute exact path="/groups/:groupId/events/:eventId" component={EventShowContainer} />

    </Switch>

    <footer>
      <Route path="/" component={FooterContainer} />
    </footer>
  </div>
);

export default App;