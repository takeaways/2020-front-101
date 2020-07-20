import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Route, Link, Router } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>LIST</h3>
      <ul>
        <li>
          <Link to="/profiles/devJang">Dev</Link>
        </li>
        <li>
          <Link to="/profiles/hommer">Hommer</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
