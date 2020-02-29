import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import routes from 'routes';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import DetailPage from 'views/DetailPage';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
