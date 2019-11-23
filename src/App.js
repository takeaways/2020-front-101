import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
