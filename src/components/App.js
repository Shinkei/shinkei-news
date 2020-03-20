import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import LinkList from './LinkList'
import CreateLink from './CreateLink';
import Header from './Header'
import Login from './Login'
import Search from './Search';

function App() {
  return (
    <div>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/new/1'} />}></Route>
          <Route exact path="/create" component={CreateLink}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/top" component={LinkList}></Route>
          <Route exact path="/new/:page" component={LinkList}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
