import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./components/Header";
import Posts from "./routes/Posts";
import MyPage from "./routes/MyPage";
import Login from "./routes/Login";
import Search from "./routes/Search";
import NoMatch from "./routes/NoMatch";
import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/search" component={Search} />
          <Route path="/me" component={MyPage} />
          <Route path="/login" component={Login} />
          <Route path="/profiles" component={Profiles} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
